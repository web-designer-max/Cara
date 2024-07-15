const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const cartBtn = document.getElementById("cartBtn");
const addItem = document.getElementById("addItem");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Cart Button Click To add Number In lgBag
let count = 0;
cartBtn.addEventListener("click", () => {
  count++;
  addItem.innerText = count;
  addItem.style.display = "inline";
  //   addItem.style.padding='6px';
});
