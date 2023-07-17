
// fixed header elements
const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.width = '100%';
    header.style.zIndex = '9999';
    header.style.backgroundColor = '#0000002a';


  } else {
    header.style.position = 'tatic';
    header.style.backgroundColor = 'transparent';

  }

});
window.addEventListener('load', () => {
  header.style.backgroundColor = 'transparent';
});



// open nav ul
document.querySelector("header .toggle-menu").onclick = function () {

  this.classList.toggle("open-nav")


};
document.addEventListener('keydown', function (event) {
  if (event.key === "ArrowRight") {
    document.querySelector(".landing .change-background.two").classList.remove("close")

  }
});


// close portiflio
document.querySelector(".landing .change-background.two").onclick = function () {
  this.classList.toggle("close")

}







// select desing page element
let desingPage = document.querySelector(".desing");
// get Array of ims
let imgsArray2 = ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg",];

setInterval(() => {
  // get random number
  let randomNumber2 = Math.floor(Math.random() * imgsArray2.length);

  // chnge background-url img
  desingPage.style.backgroundImage = 'url("/imgs/Randomwallpapers2/' + imgsArray2[randomNumber2] + '")'

}, 4000)






//open cotact icon
document.querySelector(".normal").onclick = function () {

  this.classList.toggle("special-container")


};
//open cotact icon
document.querySelector(".circle-container .fa-comment-alt").onclick = function () {

  this.classList.toggle("fa-times")



};
