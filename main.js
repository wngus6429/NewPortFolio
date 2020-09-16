/** @format */

// Make navbar transpaarent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle Scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  //   data-link="#about 이런식으로 달아준거 dataset안에 들어있따.
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  //console.log(event.target.dataset.link);
  //   const scrollTo = document.querySelector(link);
  //   scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView(link);
});

//Handle click on "Contact me" Button on home
const contactbtn = document.querySelector(".home__contact");
contactbtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const homwHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //   console.log(1 - window.scrollY / homwHeight);
  home.style.opacity = 1 - window.scrollY / homwHeight;
  //   이 방법으로 스타일링 추가 가능함
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrowup");
document.addEventListener("scroll", () => {
  if (window.scrollY > homwHeight / 2) {
    arrowUp.classList.add("visible");
    // 스크롤 밑으로 하면 화살표 보이게
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the arrow up
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Click ScrollView Method
function scrollIntoView(seletor) {
  const scrollTo = document.querySelector(seletor);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return; //아무것도 안한다는거
  }

  //Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  //const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  e.target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      //console.log(project.dataset.type);
      // ALl * 이거나 아니면 filter가 project에 있는 dataset값의 type이 똑같으면,
      // 선택된거랑 똑같으면, 우리가 프로젝트의 클래스에 추가해줄거임
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
      //클릭한 필터와 데이터타입이 매칭하면 보여줘야 하니까, 안보여주는 클래스를 뺴고
      //만약에 타입이 필터랑 동일하지 않으면 안보여줘야 하니까, 안보여줘야 되는 클래스를 등록해준다
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
  //애니메이션 클래스 추가 되고 함수가 끝나고 0.3초 지난 다음에 위의 코드가 실행되는 거임.
  //setTimeout은 브라우저 API
  console.log(filter);
});

//  이 3가지는 결론적으로 같다.
//  projects.forEach((project) => {});

//  for (let projects of projects){}

//  let project
//  for(let i=0; i<projects.length; i++){
//   project = projects[i];
//    }
