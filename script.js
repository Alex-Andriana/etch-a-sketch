//create container div
const block = document.createElement("div");
const b = document.querySelector("body");
b.appendChild(block);
block.classList.add('box');

//create button 
const btn = document.createElement("button");
b.appendChild(btn);
btn.style.height = "50px";
btn.style.width = "100px";

btn.textContent = "SIZE"
//get size from user
let size = 0;
btn.addEventListener('click', () => {
size = prompt("Enter the number of pixel per side:")
size = parseInt(size, 10);
let num = size * size;
let g_size = 950/size;

//make inner divs from user input
for(let i = 0; i < num ; i++){
const grid = document.createElement("div");
block.appendChild(grid);
grid.classList.add('g');
grid.style.width =  g_size + 'px';
grid.style.height =  g_size + 'px';}

//even for hoover
 const pixes = document.querySelectorAll(".g");
 pixes.forEach((pix) => {
     pix.addEventListener('mouseover', () => {
         pix.style['background-color'] = 'blue';
     });
 });
});

