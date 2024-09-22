import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const hotSwiper = new Swiper(".hotSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-hot-next",
    prevEl: ".swiper-hot-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 24
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

const articleSwiper = new Swiper(".articleSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    992: {
      slidesPerView: 1,
      grid: {
        rows: 3,
        fill: "row"
      }
    },
  }
});

const masterSwiper = new Swiper(".masterSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-master-next",
    prevEl: ".swiper-master-prev",
  },
});

const activitySwiper = new Swiper(".activitySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-activity-next",
    prevEl: ".swiper-activity-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },

    992: {
      slidesPerView: 2.5,
      spaceBetween: 24
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});

const evaluateSwiper = new Swiper(".evaluateSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },

    992: {
      slidesPerView: 2.5,
      spaceBetween: 24,

      grid: {
        rows: 1,
        fill: "row"
      }
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 24,

      grid: {
        rows: 1,
        fill: "row"
      }
    },
  }
});

const worksSwiper = new Swiper(".worksSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 24,
      initialSlide: 1,
    },
  }
});

const studySwiper = new Swiper(".studySwiper", {
  slidesPerView: 1.25,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-study-next",
    prevEl: ".swiper-study-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
  }
});

const exclusiveSwiper = new Swiper(".exclusiveSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 16,
  
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-exclusive-next",
    prevEl: ".swiper-exclusive-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,

      grid: {
        rows: 1,
        fill: "row"
      }
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 24,

      grid: {
        rows: 2,
        fill: "row"
      }
    },
  }
});