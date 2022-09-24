let headerHeight = document.querySelector('#header').offsetHeight;
let obj_banner = document.querySelector('#banner');
obj_banner.style.marginTop = `${headerHeight}px`;

// !input 
let bannerHeadingWidth = document.querySelector('.banner__heading').offsetWidth;
document.querySelector('.banner__form').style.width = `${bannerHeadingWidth}px`;

// ! change img location list

const changeImg = (url) => {
    for (element of obj_lacationImg) {
        element.style.backgroundImage = url;
    }
};

let obj_lacationImg = document.querySelectorAll('#singapore');
let allBtn = document.querySelector('#all__btn');
let packageBtn = document.querySelector('#package__btn');
let groupBtn = document.querySelector('#group__btn');
let travelBtn = document.querySelector('#travel__btn');

// allBtn.addEventListener('click', changeImg(url1));
// packageBtn.addEventListener('click', changeImg(url2));