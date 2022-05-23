const block = document.createElement("div");
const b = document.querySelector("body");
b.appendChild(block);
block.classList.add('box');

const btn = document.createElement("button");
b.appendChild(btn);

let size;
btn.addEventListener('click', () => {
size = prompt("Enter the number of pixel per side:", "16")
size = parseInt(size, 10);
});
for(let i = 0; i < 256; i++){
const grid = document.createElement("div");
block.appendChild(grid);
grid.classList.add('g');}

 const pixes = document.querySelectorAll(".g");
 pixes.forEach((pix) => {
     pix.addEventListener('mouseover', () => {
         pix.style.cssText = "background-color: blue";
     });
 });