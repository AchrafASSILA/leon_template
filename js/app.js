// window.addEventListener('scroll',function(){
//     const nav = document.querySelector('header');
//     nav.classList.toggle("sticky",window.scrollY>0);
// })
let arrow_up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    arrow_up.classList.add("show");
  } else {
    arrow_up.classList.remove("show");
  }
};
arrow_up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
