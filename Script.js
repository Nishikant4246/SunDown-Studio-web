document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });
  });


  // To set an Images 

function page4Animation(){
let elemm = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image");

elemm.addEventListener("mouseenter",function(){
  fixed.style.display = "block";
});

elemm.addEventListener("mouseleave",function(){
  fixed.style.display = "none";
})

let elems = document.querySelectorAll(".elem");
elems.forEach(function(element){
      element.addEventListener("mouseenter",function(){
        let image = element.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      })
})

}
function swiperAnimation(){

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
function menuAnmation(){
    
  let menu = document.querySelector("nav h3");
  let full = document.querySelector("#full-scr");
  let navimg = document.querySelector("nav img");
  
  let flag = 0
  
  menu.addEventListener("click", function (){
    if(flag == 0){
       full.style.top = 0 
       navimg.style.opacity = 0
       flag = 1 
    }else{
       full.style.top = "-100%"
       navimg.style.opacity = 1
       flag = 0
    }
  })
  }

function loaderAnimation(){
  let loader = document.querySelector("#loader")
  setTimeout( function(){
       loader.style.top = "-100%"
  },5300)
}
loaderAnimation();
swiperAnimation();
page4Animation();
menuAnmation();



// Working 

// let TheBoss = document.querySelector("#TheBoss");
// let Footer = document.querySelector('#footer');
// TheBoss.addEventListener("mouseenter",function(){
//   Footer.style.display = "block";
// });
// TheBoss.addEventListener("mouseleave",function(){
//   Footer.style.display = "none";
// })

// let TheBosss = document.querySelectorAll("#TheBoss");
// TheBosss.forEach(function(element){
//       element.addEventListener("mouseenter",function(){
//         let Footer = element.getAttribute("#footer");
//         Footer.style.display =  'block';
//       })
// })




// Starting Animation 





