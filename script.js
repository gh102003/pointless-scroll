const randomColour = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};


const pages = [];
let lastColour = randomColour();

let wrapperEl;


const addNewPage = () => {
  console.log("added new page");

  const el = document.createElement("div");
  el.className = "page";

  const nextColour = randomColour();
  el.style.background = `linear-gradient(${lastColour}, ${nextColour})`;
  lastColour = nextColour;

  pages.push(el);
  wrapperEl.appendChild(el);
};


document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
  wrapperEl = document.getElementById("wrapper");

  document.addEventListener("scroll", () => {
    if (window.scrollY > (pages.length - 5) * window.innerHeight * 1.5) {
      addNewPage();
    }
  });
});
