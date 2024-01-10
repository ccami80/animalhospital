
      let tabs = document.querySelectorAll(".tabsToggle"),
      contents = document.querySelectorAll(".tabsContent");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        contents.forEach((content) => {
          content.classList.remove("is-active");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("is-active");
        });
        contents[index].classList.add("is-active");
        tabs[index].classList.add("is-active");
      });
    });





      let abouttabs = document.querySelectorAll(".tabsToggle-about"),
      aboutcontents = document.querySelectorAll(".tabsContent-about");

      abouttabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        aboutcontents.forEach((content) => {
          content.classList.remove("is-active");
        });
        abouttabs.forEach((tab) => {
          tab.classList.remove("is-active");
        });
        aboutcontents[index].classList.add("is-active");
        abouttabs[index].classList.add("is-active");
      });
    });




     /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 100 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
 







// 

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('is-active')
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('is-active')
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


// sitemap
const siteoverlay = document.querySelector('[data-overlay]');
const sitemap=document.querySelector('.sitemap-area');
const closebt=document.querySelector('.closebt');
// const body=document.querySelector('body');
const sitemapbt=document.querySelector('.sitemap-bt');

sitemapbt.addEventListener('click',()=>{
  overlay.classList.add('active');
  document.body.classList.add('is-active')
  
  sitemap.classList.toggle('is-active')
})
closebt.addEventListener('click',()=>{
  overlay.classList.remove('active');
  document.body.classList.remove('is-active')
  sitemap.classList.toggle('is-active')
})


