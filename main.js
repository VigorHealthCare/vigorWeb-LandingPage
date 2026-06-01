document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  /* 
     Sticky Navbar Logic:
     Adds a 'scrolled' class to the navbar when the user scrolls down 50px.
     This facilitates the glassmorphic transition effect.
  */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* 
     Smooth Scrolling Logic:
     Intercepts clicks on anchor links and scrolls to the target element
     with a fixed header offset for better visual alignment.
  */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Currency Toggle Logic
  const currencyBtns = document.querySelectorAll(".currency-btn");
  const priceElements = document.querySelectorAll(".price[data-diaspora]");
  const pocketNotes = document.querySelectorAll(".pocket-note[data-diaspora]");

  currencyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active state on buttons
      currencyBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const currency = btn.dataset.currency;

      // Animate the price change
      priceElements.forEach((el) => {
        el.classList.add("switching");
        setTimeout(() => {
          el.textContent = currency === "naira" ? el.dataset.naira : el.dataset.diaspora;
          el.classList.remove("switching");
        }, 200);
      });

      // Switch out-of-pocket note
      pocketNotes.forEach((el) => {
        const textSpan = el.querySelector(".pocket-text");
        if (textSpan) {
          textSpan.textContent = currency === "naira" ? el.dataset.naira : el.dataset.diaspora;
        }
      });
    });
  });
  // Fade-in Animation Logic
  const fadeElements = document.querySelectorAll(".fade-in");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});
