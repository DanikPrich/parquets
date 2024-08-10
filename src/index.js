import { register } from "swiper/element/bundle";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", function () {
  // Array of image paths
  const imagesPaths = [
    "/src/assets/imgs/slider_img1.jpeg",
    "/src/assets/imgs/slider_img2.jpeg",
    "/src/assets/imgs/slider_img3.jpeg",
    "/src/assets/imgs/slider_img1.jpeg",
    "/src/assets/imgs/slider_img2.jpeg",
    "/src/assets/imgs/slider_img3.jpeg",
  ];

  const images = imagesPaths.map((imgPath, index) => {
    return {
      id: index,
      src: imgPath,
    };
  });

  const createHeaderSwiper = () => {
    register();

    const swiperEl = document.querySelector("swiper-container");
    if (swiperEl) {
      const swiperParams = {
        slidesPerView: 1,
        on: {
          init() {},
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  };
  const createPortfolioSwiper = () => {
    const porfolionSwiperWrapper = document.getElementById(
      "portfolio-swiper-wrapper"
    );

    // Append images to the swiper-wrapper
    images.forEach((image) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      const img = document.createElement("img");
      img.src = image.src;
      slide.appendChild(img);
      porfolionSwiperWrapper.appendChild(slide);

      slide.addEventListener("click", () =>
        handlePortfolioImageClick(image.id)
      );
    });

    // Initialize Swiper
    const portfolioSwiper = new Swiper(".portfolio-swiper-container", {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      spaceBetween: 10,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return portfolioSwiper;
  };
  const createModalSwiper = () => {
    const modalSwiperWrapper = document.getElementById(
      "modal-images-swiper-wrapper"
    );

    // Append images to the swiper-wrapper
    images.forEach((image) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.classList.add("h-full");
      slide.classList.add("w-full");
      const img = document.createElement("img");
      img.classList.add("h-full");
      img.classList.add("w-full");
      img.classList.add("object-cover");
      img.src = image.src;
      slide.appendChild(img);
      modalSwiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    const modalSwiper = new Swiper(".modal-swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return modalSwiper;
  };

  /* Swipers initial */
  createHeaderSwiper();
  createPortfolioSwiper();
  const modalSlider = createModalSwiper();

  /* Images modal open logic */
  const imagesModal = document.getElementById("images-modal");
  const closeImagesModalButton = document.getElementById("images-modal-close");

  const handlePortfolioImageClick = (id) => {
    imagesModal.classList.add("flex");
    imagesModal.classList.remove("hidden");
    console.log(modalSlider);
    setTimeout(() => {
      modalSlider.slideTo(id, 0, false);
      console.log(modalSlider);
    }, 100);
  };

  const handleModalClose = () => {
    modalSlider.slideTo(0, 0, false);
    imagesModal.classList.add("hidden");
    imagesModal.classList.remove("flex");
  };

  closeImagesModalButton.addEventListener("click", handleModalClose);

  /* Sidebar menu open logic */

  const hamburgerButton = document.getElementById("hamburger-button");
  const closeSidebarMenuButton = document.getElementById("sidebar-menu-close");
  const sidebarMenuWrapper = document.getElementById("sidebar-menu-wrapper");
  const sidebarMenuList = document.getElementById("sidebar-menu-list");

  const handleSidebarMenuOpen = () => {
    sidebarMenuWrapper.classList.add("flex");
    sidebarMenuWrapper.classList.remove("hidden");
    setTimeout(() => {
      sidebarMenuList.classList.add("translate-x-0");
      sidebarMenuList.classList.remove("translate-x-[-100%]");
    }, 100);
  };

  const handleSidebarMenuClose = () => {
    sidebarMenuList.classList.remove("translate-x-0");
    sidebarMenuList.classList.add("translate-x-[-100%]");
    setTimeout(() => {
      sidebarMenuWrapper.classList.add("hidden");
      sidebarMenuWrapper.classList.remove("flex");
    }, 100);
  };

  hamburgerButton.addEventListener("click", handleSidebarMenuOpen);
  closeSidebarMenuButton.addEventListener("click", handleSidebarMenuClose);

  /* Navbar ervices dropdown logic */

  const servicesDropdownTrigger = document.querySelector(
    "#services-dropdown-trigger"
  );
  const servicesDropdown = document.querySelector("#services-dropdown");

  const handleServicesDropdownOpen = () => {
    servicesDropdown.classList.add("flex");
    servicesDropdown.classList.remove("hidden");
    setTimeout(() => {
      servicesDropdown.classList.add("opacity-100");
      servicesDropdown.classList.remove("opacity-0");
    }, 40);
  };

  const handleServicesDropdownClose = () => {
    servicesDropdown.classList.remove("opacity-100");
    servicesDropdown.classList.add("opacity-0");
    setTimeout(() => {
      servicesDropdown.classList.add("hidden");
      servicesDropdown.classList.remove("flex");
    }, 40);
  };

  servicesDropdownTrigger.addEventListener(
    "mouseenter",
    handleServicesDropdownOpen
  );
  servicesDropdownTrigger.addEventListener(
    "mouseleave",
    handleServicesDropdownClose
  );

  /* Sidebar services dropdown logic */

  const sidebarServicesDropdownTrigger = document.querySelector(
    "#sidebar-services-dropdown-trigger"
  );
  const sidebarServicesDropdown = document.querySelector(
    "#sidebar-services-dropdown"
  );
  const sidebarServicesDropdownArrow = document.querySelector(
    "#sidebar-services-dropdown-arrow"
  );
  let isSidebarServicesDropdownOpen = false;

  const handleSidebarServicesDropdownToggle = () => {
    if (isSidebarServicesDropdownOpen) {
      sidebarServicesDropdown.classList.add("h-0");
      sidebarServicesDropdown.classList.remove("h-[240px]");
      sidebarServicesDropdown.classList.remove("mb-[20px]");

      sidebarServicesDropdownArrow.classList.remove("rotate-180");
      sidebarServicesDropdownArrow.classList.add("rotate-0");

      sidebarServicesDropdown.classList.remove("pl-[10px]");
    } else {
      sidebarServicesDropdown.classList.add("h-[240px]");
      sidebarServicesDropdown.classList.add("mb-[20px]");
      sidebarServicesDropdown.classList.remove("h-0");

      sidebarServicesDropdownArrow.classList.remove("rotate-0");
      sidebarServicesDropdownArrow.classList.add("rotate-180");

      sidebarServicesDropdown.classList.add("pl-[10px]");
    }
    isSidebarServicesDropdownOpen = !isSidebarServicesDropdownOpen;
  };

  sidebarServicesDropdownTrigger.addEventListener(
    "click",
    handleSidebarServicesDropdownToggle
  );
});
