console.log("portfolio");

const d = document;
const $cursor = d.getElementById("cursor");
const $btnup = d.getElementById("btnup");

const $ulredsocial = document.getElementById("redsocial");
const $ulredsocialfooter = document.getElementById("redsocialfooter");

d.addEventListener("mousemove", (e) => {
  const X = e.clientX;
  const Y = e.clientY;
  $cursor.style.left = X - 40 + "px";
  $cursor.style.top = Y - 40 + "px";
});

$ulredsocial.addEventListener("mouseover", (e) => {
  $cursor.classList.add("redsocial");
});

$ulredsocial.addEventListener("mouseout", (e) => {
  $cursor.classList.remove("redsocial");
});

$ulredsocialfooter.addEventListener("mouseover", (e) => {
  $cursor.classList.add("redsocial");
});

$ulredsocialfooter.addEventListener("mouseout", (e) => {
  $cursor.classList.remove("redsocial");
});

window.addEventListener("scroll", () => {
  const y = window.screenY || d.documentElement.scrollTop;

  if (y > 200) {
    $btnup.classList.remove("btnup-hidden");
  } else {
    $btnup.classList.add("btnup-hidden");
  }
});

$btnup.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", (e) => {
  window.scrollTo(0, 0);
  console.log("Recarga");
});
