console.log("portfolio");

const d = document;
const $cursor = d.getElementById("cursor");

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
