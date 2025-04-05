import { register } from "swiper/element/bundle";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

import sliderImg1 from "./assets/imgs/slider_img1.jpeg";
import sliderImg2 from "./assets/imgs/slider_img2.jpeg";
import sliderImg3 from "./assets/imgs/slider_img3.jpeg";

document.addEventListener("DOMContentLoaded", function () {
  // Array of image paths

  const imagesPaths = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg1,
    sliderImg2,
    sliderImg3,
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

  /* Contact form */

  /* Mobile validator */

  let input = document.querySelector("#phone"),
    errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");

  // here, the index maps to the error code returned from getValidationError - see readme
  let errorMap = [
    "Неверный формат",
    "Неверный код страны",
    "Слишком короткий",
    "Слишком длинный",
    "Неверный формат",
  ];

  // initialise plugin
  let iti = window.intlTelInput(input, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
    preferredCountries: ["ua", "sk", "gb", "usa"],
  });

  let reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hidden");
    validMsg.classList.add("hidden");
  };

  // on blur: validate
  input.addEventListener("blur", function () {
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hidden");
      } else {
        input.classList.add("error");
        let errorCode = iti.getValidationError();

        errorMsg.innerHTML = errorMap[errorCode]
          ? errorMap[errorCode]
          : errorMap[0];
        errorMsg.classList.remove("hidden");
      }
    }
  });

  // on keyup / change flag: reset
  input.addEventListener("change", reset);
  input.addEventListener("keyup", reset);

  /* Contact form submition */
  async function postData({ fistName, lastName, tel, email, message }) {
    const botToken = "8074235029:AAFk3xc_IrVAU8LmzX87L8pi31j8puh5cco";
    const chatId = "203899215";

    const finalText = `
    <b>🟢 У тебя новая заявка! ЮХУ! 🟢</b>
  ━━━━━━━━━━━━━━ 
  ├ Имя: ${fistName} ${lastName}
  ├ Телефон: ${tel}
  ├ Email: ${email}
  ━━━━━━━━━━━━━━
  ├ Message: ${message}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: finalText,
        parse_mode: "HTML",
      }),
    });

    return await res.json();
  }

  const btnFormSubmit = document.querySelector("#formSubmit");

  btnFormSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const firstNameElem = document.querySelector("#first-name"),
      lastNameElem = document.querySelector("#last-name"),
      phoneElem = document.querySelector("#phone"),
      emailElem = document.querySelector("#email"),
      messageElem = document.querySelector("#message");

    if (
      !phoneElem.classList.contains("error") &&
      phoneElem.value &&
      firstNameElem.value &&
      lastNameElem.value &&
      phoneElem.value &&
      emailElem.value &&
      messageElem.value
    ) {
      const data = {
        firstName: firstNameElem.value,
        lastName: lastNameElem.value,
        tel: phoneElem.value,
        email: emailElem.value,
        message: messageElem.value,
      };

      const res = postData(data)
        .then(() => {
          console.log("Благодарю за регистрацию!");
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(res);
    }
  });
});
