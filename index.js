// stickyMenu header
let nav = document.querySelector("#navigator");
let navTop = nav.offsetTop;
const stickyNavigation = () => window.scrollY >= navTop ?
    document.body.classList.add('sticky') :
    document.body.classList.remove('sticky');
window.addEventListener('scroll', stickyNavigation);
// #company-view carousel
direction = 0;
const next = document.querySelector('.arrowRight');
const prev = document.querySelector('.arrowLeft');

const carousel = document.querySelector('.slideWrap');
const slider = document.querySelector('.slideList');

function companyView() {
    function slide() {
        slider.addEventListener("transitionend", () => {
            direction === 0 ? slider.prepend(slider.lastElementChild) :
                slider.appendChild(slider.firstElementChild);
            slider.style.transition = "none";
            slider.style.transform = "translate(0)";
            setTimeout(() => {
                slider.style.transition = "all ease 1s";
            });
        }, false);
    }
    slide();
    const arrowRght = () => next.addEventListener("click", function() {
        direction = -1;
        slider.style.transform = "translate(-34.5%)";
    });

    const arrowLft = () => prev.addEventListener("click", function() {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);
        }
        slider.style.transform = "translate(34.5%)";
    });
    arrowLft();
    arrowRght();
}
companyView();

//#productFeatures

const featuresProdIn = document.querySelectorAll(".featuresProdItem");

function featuresProd() {
    for (let prodItem of featuresProdIn) {
        prodItem.addEventListener("mouseover", () => {
            prodItem.querySelector(".hex").classList.add("fillInside");
            prodItem.querySelector(".checkmark").classList.add("bgcFill");
        });
    }
    for (let prodItem of featuresProdIn) {
        prodItem.addEventListener("mouseleave", (highlight) => {
            prodItem.querySelector(".hex").classList.remove("fillInside");
            prodItem.querySelector(".checkmark").classList.remove("bgcFill");
        });
    }
}
featuresProd();

// #aboutUs

function lonelyProdIcon() {
    const productCheckPic = document.querySelectorAll(".productCheckPic");
    for (let checkPic of productCheckPic) {
        checkPic.addEventListener("mouseover", function() {
            checkPic.querySelector(".poligon").classList.add("bgcFill");
            checkPic.querySelector(".inside").style.fill = "#fff";
            checkPic.querySelector(".checkmark").style.stroke = "#262626";
            checkPic.querySelector(".strokeFill").style.fill = "#262626";
        });
    }
    for (let checkPic of productCheckPic) {
        checkPic.addEventListener("mouseleave", function() {
            checkPic.querySelector(".poligon").classList.remove("bgcFill");
            checkPic.querySelector(".inside").style.fill = "#262626";
            checkPic.querySelector(".checkmark").style.stroke = "#262626";
            checkPic.querySelector(".strokeFill").style.stroke = "#fff";
        });
    }
}
lonelyProdIcon();

function prodAboutIcons() {
    const productsAbout = document.querySelectorAll(".productsAbout");
    for (let productItem of productsAbout) {
        productItem.addEventListener("mouseover", (over) => {
            productItem.querySelector(".poligon").style.cssText = "fill: #ff0036; stroke: #ff0036";
            productItem.querySelector(".inside").classList.add("fillInside");
        });
    }
    for (let productItem of productsAbout) {
        productItem.addEventListener("mouseleave", (leave) => {
            productItem.querySelector(".poligon").style.cssText = "fill: transparent; stroke: #262626;";
            productItem.querySelector(".inside").classList.remove("fillInside");
        });
    }
}
prodAboutIcons();
// sevvices

function services() {
    const serviceCard = document.querySelectorAll(".serviceCard");
    for (let value of serviceCard) {
        value.addEventListener('mouseover', function(over) {
            value.querySelector('.inside').classList.add("fillInside");
            value.querySelector(".poligon").classList.add("bgcFill");
        });
    }
    for (let value of serviceCard) {
        value.addEventListener("mouseleave", function(leave) {
            value.querySelector(".inside").classList.remove("fillInside");
            value.querySelector(".poligon").classList.remove("bgcFill");
        });
    }
}
services();
// #teamWork

function teamWork() {
    const teamMembers = document.querySelectorAll(".teamMember");
    for (let teamItem of teamMembers) {
        teamItem.addEventListener("mouseover", (over) => {
            teamItem.querySelector(".socialStaff").style.opacity = 1;
            teamItem.querySelector(".notes").style.border = "1px solid #262626";
            teamItem.querySelector(".personName").style.color = "#ff0036";
        });
    }
    for (let teamItem of teamMembers) {
        teamItem.addEventListener("mouseleave", (leave) => {
            teamItem.querySelector(".socialStaff").style.opacity = 0;
            teamItem.querySelector(".notes").style.border = "1px solid #e7e7e7";
            teamItem.querySelector(".personName").style.color = "#262626";
        });
    }
}
teamWork();

//   #bestseller

function bestseller() {
    const reseller = document.querySelectorAll(".reseller");
    for (let sellItem of reseller) {
        sellItem.addEventListener("mouseover", (over) => {
            sellItem.querySelector(".bestPrice").style.background = "#ff0036"
            sellItem.querySelector(".order").style.background = "#ff0036"
        });
    }
    for (let sellItem of reseller) {
        sellItem.addEventListener("mouseleave", (leave) => {
            sellItem.querySelector(".bestPrice").style.background = "#f2f2f2"
            sellItem.querySelector(".order").style.background = "#262626"
        });
    }
}
bestseller();

// #follow_up

function followUp() {
    const socialHex = document.querySelectorAll(".socialHex");
    for (let pic of socialHex) {
        pic.addEventListener("mouseover", function() {
            pic.querySelector(".poligon").classList.add("bgcFill");
            pic.querySelector(".socialIcons").classList.add("fillInside");
        });
    }
    for (let pic of socialHex) {
        pic.addEventListener("mouseleave", function() {
            pic.querySelector(".poligon").classList.remove("bgcFill")
            pic.querySelector(".socialIcons").classList.remove("fillInside");
        });
    }
}
followUp();
//
let revSlide = document.querySelector(".reviewsList");
let dotList = document.querySelector(".dotlist");
let slides = [...revSlide.children];
let dots = [...dotList.children];
let slideWidth = slides[0].getBoundingClientRect().width;

function positionSlides(slides) {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + 'px';
    }
}

positionSlides(slides);

dotList.addEventListener('click', (e) => {
    if (e.target === dotList) return;
    const targetDot = e.target;
    const currentDot = dotList.querySelector(".active");
    const targetDotIndex = findIndex(targetDot, dots);
    const currentSlide = revSlide.querySelector(".active");
    const slideIndex = slides[targetDotIndex];
    moveToSlide(revSlide, currentSlide, slideIndex);
    toggleActive(targetDot, currentDot);
})

function findIndex(item, items) {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}

function moveToSlide(revSlide, currentSlide, slideIndex) {
    let option = slideIndex.style.left;
    revSlide.style.transform = `translateX(-${option})`;
}

function toggleActive(active, current) {
    active.classList.add('active');
    current.classList.remove('active');
}

// toggle
let mainMenu = document.querySelector("#mainMenu")
let menuToggle = document.querySelector(".menuToggle");
menuToggle.addEventListener('mouseover', () => {
    mainMenu.style.display = 'flex';
    menuToggle.classList.add('isClicked');
    //}
});
let mainList = document.querySelector(".mainList");
mainList.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    menuToggle.classList.remove('isClicked');
});
