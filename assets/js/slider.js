const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let itemWidth= Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
window.addEventListener('resize', function(){
   itemWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
});
const sliderMain = $(".slider-main");
const sliderItem = $$(".slider-item");
let prevBtn = $(".btn-prev");
let nextBtn = $(".btn-next");
let i = 0;
const handlerSlider = (check) =>{
  switch (check) {
      case "next":{
        i = (i<sliderItem.length-1) ? ++i : 0;
        break;
      }
      default: {
        i = (i>0) ? --i : i;
      }
    }
    console.log(i)
    sliderMain.style.transform = `translateX(-${itemWidth*i}px)`;
}
prevBtn.addEventListener("click",()=>handlerSlider('prev'))
nextBtn.addEventListener("click",()=>handlerSlider('next'))

setInterval(()=>{
    handlerSlider("next")
},5000)
