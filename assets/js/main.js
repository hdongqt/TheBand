const btnSearch = $(".header__search-btn");
const inputSearch = $(".input-search");
btnSearch.onclick = function(){
  inputSearch.classList.toggle("show");
}

const toTop = $(".to-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
 toTop.onclick = function() {
   topFunction();
 }
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}