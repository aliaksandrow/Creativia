// productsAbout
const prodAbout = Array.from(document.querySelectorAll(".productsAbout"));
const prodAboutIn = prodAbout.map(item => {
  item.addEventListener('mouseover',function() {
    item.querySelector(".poligon").style.cssText = "fill: #ff0036; stroke: #ff0036";
    item.querySelector(".inside").classList.add("fillInside");
  })
});
const prodAboutOut = prodAbout.map(item => {
  item.addEventListener('mouseleave',function() {
    item.querySelector(".poligon").style.cssText = "fill: transparent; stroke: #262626";
    item.querySelector(".inside").classList.remove("fillInside");
  })
})
//
const prodPic = Array.from(document.querySelectorAll(".productCheckPic"));
const prodCheckIn = prodPic.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".poligon").classList.add("bgcFill");
    item.querySelector(".inside").style.fill = "#fff";
    item.querySelector(".checkmark").style.stroke = "#262626";
    item.querySelector(".strokeFill").style.fill = "#262626";
  });
});
const prodCheckOut = prodPic.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector(".poligon").classList.remove("bgcFill");
    item.querySelector(".inside").style.fill = "#262626";
    item.querySelector(".checkmark").style.stroke = "#262626";
    item.querySelector(".strokeFill").style.stroke = "#fff";
  });
});
// productFeatures
const prodItem= Array.from(document.querySelectorAll(".featuresProdItem"));
const featuresProdIn = prodItem.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".hex").classList.add("fillInside");
    item.querySelector(".checkmark").classList.add("bgcFill");
  });
});
const featuresProdOut = prodItem.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector(".hex").classList.remove("fillInside");
    item.querySelector(".checkmark").classList.remove("bgcFill");
  });
});
// services
const card = Array.from(document.querySelectorAll(".serviceCard"));
const serviceCardIn = card.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector('.inside').classList.add("fillInside");
    item.querySelector(".poligon").classList.add("bgcFill");
  })
});
const serviceCardOut = card.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector('.inside').classList.remove("fillInside");
    item.querySelector(".poligon").classList.remove("bgcFill");
  })
});
// teamwork
const staffItem = Array.from(document.querySelectorAll(".teamMember"));
const memberCardIn = staffItem.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".socialStaff").style.opacity = 1;
    item.querySelector(".notes").style.border = "1px solid #262626";
    item.querySelector(".personName").style.color = "#ff0036";
  })
});
const memberCardOut = staffItem.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector(".socialStaff").style.opacity = 0;
    item.querySelector(".notes").style.border = "1px solid #e7e7e7";
    item.querySelector(".personName").style.color = "#262626";
  })
});
// bestseller
const reseller = Array.from(document.querySelectorAll(".reseller"));
const bestsellerIn = reseller.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".bestPrice").style.background = "#ff0036"
    item.querySelector(".order").style.background = "#ff0036"
  })
});
const bestsellerOut = reseller.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector(".bestPrice").style.background = "#f2f2f2"
    item.querySelector(".order").style.background = "#262626"
  })
});
// followUp
const social = Array.from(document.querySelectorAll(".socialHex"));
const followIn = social.map(item => {
  item.addEventListener('mouseover', function() {
    item.querySelector(".poligon").classList.add("bgcFill");
    item.querySelector(".socialIcons").classList.add("fillInside");
  })
});
const followOut = social.map(item => {
  item.addEventListener('mouseleave', function() {
    item.querySelector(".poligon").classList.remove("bgcFill");
    item.querySelector(".socialIcons").classList.remove("fillInside");
  })
});
// #company-view carousel
direction = 0;
const next = document.querySelector('.arrowRight');
const prev = document.querySelector('.arrowLeft');

const carousel = document.querySelector('.slideWrap');
const slider = document.querySelector('.slideList');
console.log(slider)
slider.addEventListener('transitionend', () => {
direction === 0 ? slider.prepend(slider.lastElementChild) :
slider.appendChild(slider.firstElementChild);
slider.style.transition = 'none';
slider.style.transform = 'translate(0)';
setTimeout(() => {
slider.style.transition = 'all ease 1s';
})
}, false);
next.addEventListener('click', function() {
direction = -1;
slider.style.transform = 'translate(-34.5%)';
});

prev.addEventListener('click', function() {
if (direction === -1) {
direction = 1;
slider.appendChild(slider.firstElementChild);
}
slider.style.transform = 'translate(34.5%)';
});
//------------------- revSlide ------------------------------
let revSlide = document.querySelector(".reviewsList");
let dotList = document.querySelector(".dotlist");
let slides = Array.from(document.querySelectorAll(".notePic"));
let dots = Array.from(document.querySelectorAll(".dot"));
let slideWidth = slides[0].getBoundingClientRect().width;

function positionSlides(slides) {
for(let index = 0; index < slides.length; index++) {
  slides[index].style.left = slideWidth * index +'px';
}
}

positionSlides(slides);

dotList.addEventListener('click', (e) => {
if(e.target===dotList)return;
const targetDot = e.target;
const currentDot = dotList.querySelector(".active");
const targetDotIndex = findIndex(targetDot,dots);
const currentSlide = revSlide.querySelector(".active");
const slideIndex = slides[targetDotIndex];
moveToSlide(revSlide,currentSlide,slideIndex);
toggleActive(targetDot,currentDot);
});

function findIndex(item,items) {
for(let index = 0; index < items.length; index++) {
  if(item===items[index]) {
    return index;
  }
}
};
function moveToSlide(revSlide,currentSlide,slideIndex) {
let option = slideIndex.style.left;
revSlide.style.transform=`translateX(-${option})`;
};

function toggleActive(active,current) {
active.classList.add('active');
current.classList.remove('active');
};
// toggle
let mainMenu = document.querySelector(".mainMenu")
let menuToggle = document.querySelector(".menuToggle");
menuToggle.addEventListener('mouseover', () => {
 //mainMenu.style.display = 'flex';
mainList.classList.add('mainColumn')
 menuToggle.classList.add('isClicked');
//}
});
let navigation = document.querySelector("#navigator")
let mainList = document.querySelector(".mainList");
//let mainColumn = document.querySelector(".mainColumn")
mainList.addEventListener('click', () => {
  //mainMenu.classList.add("menuToggle")
 mainList.classList.remove('mainColumn')
 menuToggle.classList.remove('isClicked');
});
// stickyMenu header
    let nav = document.querySelector("#navigator");
    const offset = nav.getBoundingClientRect();
    console.log(offset)
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > offset.top) {
      nav.style.cssText = "position: fixed; top: 0; width: 1400px;"
      } else {
        nav.style.cssText = "position: relative; top: '',"
      }
    });
    //function stickyNavigation() {
    //if(window.pageYOffset >= navTop) {
      //  document.body.classList.add('sticky')
    //  }else {
      //  document.body.classList.remove('sticky');
    //  }
  //  }
    //stickyNavigation()
  /*  let stickyNavigation = () => window.scrollY >= navTop ?
    document.body.classList.add('sticky') :
    document.body.classList.remove('sticky');
    */
   //window.addEventListener('scroll', stickyNavigation);
