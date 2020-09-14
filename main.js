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

//Click ScrollView Method
function scrollIntoView(seletor) {
  const scrollTo = document.querySelector(seletor);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
