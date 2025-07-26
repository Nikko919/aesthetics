// var swiper = new Swiper(".hero-Swiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var swiper = new Swiper(".hero-Swiper", {
  // loop: true,
  grabCursor: true,
  spaceBetween: 10,
  // cssMode: true,
  navigation: {
    prevEl: ".hero-swiper-prev",
    nextEl: ".hero-swiper-next",
  },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },


});

// newitems
var swiper = new Swiper(".newitems-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,

  // loop: true,
  grabCursor: true,
  breakpoints: {
    500: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 4,
    }
  },
  // cssMode: true,
  navigation: {
    nextEl: ".newitems-swiper-next",
    prevEl: ".newitems-swiper-prev",
  },
});


// stock
// var swiper = new Swiper(".stock-Swiper", {
//   navigation: {
//     nextEl: ".stock-swiper-next",
//     prevEl: ".stock-swiper-prev",
//   },
// });


// let stockSwiper = null;
// const stockSwiperSelector = ".stock-Swiper";
// const stockWrapperSelector = ".stock-wrapper";
// const stockSlideSelector = ".stock-slide";
// const GRID_CLASS = "stock-grid";

// function enableStockSwiper() {
//   if (!stockSwiper) {
//     stockSwiper = new Swiper(stockSwiperSelector, {
//       navigation: {
//         nextEl: ".stock-swiper-next",
//         prevEl: ".stock-swiper-prev",
//       },
//       slidesPerView: 1,
//       spaceBetween: 10,
//       breakpoints: {
//         500: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//     });
//     // Убираем сетку
//     const wrapper = document.querySelector(stockWrapperSelector);
//     if (wrapper) wrapper.classList.remove(GRID_CLASS);
//     document.querySelectorAll(stockSlideSelector).forEach(el => el.style.width = "");
//   }
// }

// function disableStockSwiper() {
//   if (stockSwiper) {
//     stockSwiper.destroy(true, true);
//     stockSwiper = null;
//   }
//   // Добавляем сетку
//   const wrapper = document.querySelector(stockWrapperSelector);
//   if (wrapper) wrapper.classList.add(GRID_CLASS);
//   document.querySelectorAll(stockSlideSelector).forEach(el => el.style.width = "auto");
// }

// function handleStockSwiper() {
//   if (window.innerWidth < 1200) {
//     enableStockSwiper();
//   } else {
//     disableStockSwiper();
//   }
// }

// window.addEventListener("load", handleStockSwiper);
// window.addEventListener("resize", handleStockSwiper);

let stockSwiper = null;
const stockSwiperSelector = ".stock-Swiper";
const stockWrapperSelector = ".stock-wrapper";
const stockSlideSelector = ".stock-slide";
const GRID_CLASS = "stock-grid";

function enableStockSwiper() {
  const wrapper = document.querySelector(stockWrapperSelector);
  if (wrapper && wrapper.classList.contains(GRID_CLASS)) {
    wrapper.classList.remove(GRID_CLASS);
  }

  if (!stockSwiper) {
    stockSwiper = new Swiper(stockSwiperSelector, {
      navigation: {
        nextEl: ".stock-swiper-next",
        prevEl: ".stock-swiper-prev",
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        500: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
}

function disableStockSwiper() {
  if (stockSwiper) {
    stockSwiper.destroy(true, true);
    stockSwiper = null;
  }
  const wrapper = document.querySelector(stockWrapperSelector);
  if (wrapper && !wrapper.classList.contains(GRID_CLASS)) {
    wrapper.classList.add(GRID_CLASS);
  }
}

function handleStockSwiper() {
  const isMobile = window.innerWidth < 1200;
  if (isMobile) {
    enableStockSwiper();
  } else {
    disableStockSwiper();
  }
}

// debounced resize listener
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

window.addEventListener("load", handleStockSwiper);
window.addEventListener("resize", debounce(handleStockSwiper, 150));


































// галерея 
var swiper = new Swiper(".interior-swiper", {
  // loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".interior-swiper-next",
    prevEl: ".interior-swiper-prev",
  },
});
var swiper2 = new Swiper(".interior-swiper2", {
  // loop: true,
  spaceBetween: 10,
  watchSlidesProgress: true,
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    prevEl: ".interior-swiper-prev",
    nextEl: ".interior-swiper-next",
  },
});