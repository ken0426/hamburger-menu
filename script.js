document.addEventListener('DOMContentLoaded', ()=>{

  const menuButton = document.getElementById("menuButton")
  const nav = document.getElementById("nav");
  const mask = document.getElementById("mask");

  menuButton.addEventListener('click', ()=>{
    menuButton.classList.toggle("active");
    nav.classList.toggle("active");
    mask.classList.toggle("active");
  })
});