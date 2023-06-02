

const Home = {
  accordions: () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;

        accordionItem.classList.toggle("active");
        accordionContent.classList.toggle("active");
      });
    });
  },

  animateElements: () => {
    function handleScrollAnimation() {
      const elements = document.querySelectorAll('.animate-el');
    
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
    
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    }
    
    window.addEventListener('scroll', handleScrollAnimation);
  },

  init: function () {
    const _this = this;
    _this.accordions();

    _this.animateElements();
  },
};

export default Home;
