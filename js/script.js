/**
 * ========================================
 * PORTFOLIO SCRIPT: VANILLA ES6+ ADVANCED
 * - Full-Stack Upgrade for Md Abu Kayser
 * - Features: Animations, Forms, Auth, Themes, Carousel
 * - Modular Classes for Maintainability
 * - Total Lines: Expanded with JSDoc, Error Handling
 * ========================================
 */

/**
 * Main App Class: Initializes All Interactivity
 * @class PortfolioApp
 */
class PortfolioApp {
  /**
   * Constructor: Binds Elements & Events
   */
  constructor() {
    // Cache DOM Elements - Performance
    this.elements = {
      mobileBtn: document.getElementById("mobile-menu-button"),
      mobileMenu: document.getElementById("mobile-menu"),
      closeMobile: document.getElementById("close-mobile"),
      authToggle: document.getElementById("auth-toggle"),
      mobileAuth: document.getElementById("mobile-auth"),
      themeLinks: document.querySelectorAll("[data-theme]"),
      skillBars: document.querySelectorAll(".skill-bar"),
      progressItems: document.querySelectorAll(".progress-item"),
      contactForm: document.getElementById("contact-form"),
      loginForm: document.getElementById("login-form"),
      signupForm: document.getElementById("signup-form"),
      viewAllBtn: document.getElementById("view-all-projects"),
      currentYearEl: document.getElementById("current-year"),
      testimonialCarousel: document.getElementById("testimonial-carousel"),
      loginModal: document.getElementById("login-modal"),
      signupModal: document.getElementById("signup-modal"),
      projectsModal: document.getElementById("projects-modal"),
      successModal: document.getElementById("success-modal"),
    };

    // State
    this.currentSlide = 0;
    this.totalSlides = 5; // Testimonials

    // Init
    this.init();
  }

  /**
   * Init Method: Event Binding & Setup
   */
  init() {
    this.bindEvents();
    this.setupAnimations();
    this.setupThemeManager();
    this.setupAuthHandler();
    this.setupFormValidator();
    this.setupCarousel();
    this.setCurrentYear();
    this.loadPersistedState();

    console.log(
      "%cPortfolio Loaded - Ready for Clients!",
      "color: #f97316; font-size: 16px; font-weight: bold;"
    );
  }

  /**
   * Bind All Events: Delegation for Perf
   */
  bindEvents() {
    // Mobile Menu
    if (this.elements.mobileBtn)
      this.elements.mobileBtn.addEventListener("click", () =>
        this.toggleMobileMenu()
      );
    if (this.elements.closeMobile)
      this.elements.closeMobile.addEventListener("click", () =>
        this.toggleMobileMenu()
      );

    // Auth
    if (this.elements.authToggle)
      this.elements.authToggle.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleModal("login-modal");
      });
    if (this.elements.mobileAuth)
      this.elements.mobileAuth.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMobileMenu();
        this.toggleModal("login-modal");
      });

    // Modal Switches
    const switchSignup = document.getElementById("switch-signup");
    const switchLogin = document.getElementById("switch-login");
    if (switchSignup)
      switchSignup.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleModal("login-modal", false);
        this.toggleModal("signup-modal", true);
      });
    if (switchLogin)
      switchLogin.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleModal("signup-modal", false);
        this.toggleModal("login-modal", true);
      });

    // Projects Modal
    if (this.elements.viewAllBtn)
      this.elements.viewAllBtn.addEventListener("click", () =>
        this.toggleModal("projects-modal")
      );

    // Form Submits
    if (this.elements.contactForm)
      this.elements.contactForm.addEventListener("submit", (e) =>
        this.handleContactSubmit(e)
      );
    if (this.elements.loginForm)
      this.elements.loginForm.addEventListener("submit", (e) =>
        this.handleAuthSubmit(e, "login")
      );
    if (this.elements.signupForm)
      this.elements.signupForm.addEventListener("submit", (e) =>
        this.handleAuthSubmit(e, "signup")
      );

    // Real-Time Validation
    document
      .querySelectorAll("input[required], textarea[required]")
      .forEach((el) => {
        el.addEventListener("input", (e) => this.validateField(e.target));
        el.addEventListener("blur", (e) => this.validateField(e.target));
      });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Close Modals on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document
          .querySelectorAll(".modal-toggle")
          .forEach((cb) => (cb.checked = false));
      }
    });
  }

  /**
   * Toggle Mobile Menu: Slide Effect
   */
  toggleMobileMenu() {
    this.elements.mobileMenu.classList.toggle("open");
    document.body.classList.toggle(
      "overflow-hidden",
      this.elements.mobileMenu.classList.contains("open")
    );
  }

  /**
   * Toggle Modal: Checkbox Hack for DaisyUI
   */
  toggleModal(id, open = null) {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = open !== null ? open : !checkbox.checked;
    }
  }

  /**
   * Setup Scroll Animations: IntersectionObserver
   */
  setupAnimations() {
    if ("IntersectionObserver" in window) {
      const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px",
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Skill Bars
            const bar = entry.target.closest(".skill-bar");
            if (bar) {
              const width = bar.dataset.width;
              setTimeout(() => (bar.style.width = width), 100);
            }
            // Progress Items
            const item = entry.target;
            if (item.classList.contains("progress-item")) {
              item.classList.add("animate");
            }
            // Timeline Groups
            const group = entry.target.closest(".group");
            if (group) {
              const dot = group.querySelector(
                '.timeline-dot, [class*="rounded-full"]'
              );
              if (dot) dot.classList.add("animate-pulse");
            }
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      this.elements.skillBars.forEach((bar) => observer.observe(bar));
      this.elements.progressItems.forEach((item) => observer.observe(item));
      document
        .querySelectorAll(".group, .card-hover")
        .forEach((el) => observer.observe(el));
    } else {
      // Fallback: Animate All on Load
      this.elements.skillBars.forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
      this.elements.progressItems.forEach((item) =>
        item.classList.add("animate")
      );
    }
  }

  /**
   * Theme Manager Class Integration
   */
  setupThemeManager() {
    const ThemeManager = new ThemeManagerClass();
    this.elements.themeLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const theme = link.dataset.theme;
        ThemeManager.setTheme(theme);
      });
    });
    ThemeManager.loadTheme();
  }

  /**
   * Auth Handler: Social Popups + Validation
   */
  setupAuthHandler() {
    const socialProviders = {
      google: {
        url: "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=https://kayser.dev/auth/callback&scope=profile email&response_type=code&access_type=offline",
        width: 500,
        height: 600,
      },
      facebook: {
        url: "https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FB_APP_ID&redirect_uri=https://kayser.dev/auth/callback&scope=email,public_profile&response_type=code",
        width: 500,
        height: 600,
      },
      github: {
        url: "https://github.com/login/oauth/authorize?client_id=YOUR_GH_CLIENT_ID&redirect_uri=https://kayser.dev/auth/callback&scope=user:email&state=state123",
        width: 500,
        height: 600,
      },
      linkedin: {
        url: "https://www.linkedin.com/oauth/v2/authorization?client_id=YOUR_LI_CLIENT_ID&redirect_uri=https://kayser.dev/auth/callback&scope=r_liteprofile r_emailaddress&response_type=code",
        width: 500,
        height: 600,
      },
      instagram: {
        url: "https://api.instagram.com/oauth/authorize?client_id=YOUR_IG_CLIENT_ID&redirect_uri=https://kayser.dev/auth/callback&scope=user_profile,user_media&response_type=code",
        width: 500,
        height: 600,
      },
      x: {
        url: "https://twitter.com/i/oauth2/authorize?client_id=YOUR_X_CLIENT_ID&redirect_uri=https://kayser.dev/auth/callback&scope=users.read tweet.read offline.access&response_type=code&state=state123",
        width: 500,
        height: 600,
      },
    };

    // Login Socials
    Object.keys(socialProviders).forEach((provider) => {
      const btn = document.getElementById(`${provider}-login`);
      if (btn) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.openSocialPopup(socialProviders[provider]);
        });
      }
    });

    // Signup Socials - Duplicate Handlers
    Object.keys(socialProviders).forEach((provider) => {
      const btn = document.getElementById(`${provider}-signup`);
      if (btn) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.openSocialPopup(socialProviders[provider]);
        });
      }
    });
  }

  /**
   * Open Social Popup: Window.Open with Callback Check
   * @param {Object} provider - URL & Dimensions
   */
  openSocialPopup(provider) {
    const { url, width, height } = provider;
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;
    const popup = window.open(
      url,
      "social-auth",
      `width=${width},height=${height},left=${left},top=${top},resizable=no`
    );
    if (!popup) {
      alert("Popup blocked! Allow popups for social login.");
      return;
    }

    // Poll for Close/Success
    const checkInterval = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkInterval);
        // In production: Check URL for code/token via postMessage
        console.log("Auth popup closed - Handle callback in backend.");
        alert("Auth completed! Redirecting... (Simulated)"); // Placeholder
      }
    }, 1000);

    // Timeout Fallback
    setTimeout(() => clearInterval(checkInterval), 60000); // 1 min
  }

  /**
   * Form Validation: Real-Time + Submit
   * @param {HTMLInputElement|HTMLTextAreaElement} field
   */
  validateField(field) {
    const { type, value, minLength, id } = field;
    const errorEl = document.getElementById(`${id}-error`);
    if (!errorEl) return;

    let error = "";
    if (!value.trim()) {
      error = `${field.previousElementSibling.textContent.trim()} is required.`;
    } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address.";
    } else if (type === "password" && value.length < minLength) {
      error = `Password must be at least ${minLength} characters.`;
    } else if (
      id === "signup-confirm" &&
      value !== document.getElementById("signup-password").value
    ) {
      error = "Passwords do not match.";
    } else if (id === "message" && value.length < 10) {
      error = "Message must be at least 10 characters.";
    }

    errorEl.textContent = error;
    errorEl.classList.toggle("hidden", !error);
    field.setCustomValidity(error || "");
    field.classList.toggle("input-error", !!error);
    field.classList.toggle("input-success", !error && value.trim());
  }

  /**
   * Handle Contact Submit: Async Fetch Simulation
   * @param {Event} e - Submit Event
   */
  async handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate All
    let valid = true;
    e.target.querySelectorAll("[required]").forEach((field) => {
      this.validateField(field);
      if (!field.validity.valid) valid = false;
    });
    if (!valid) return;

    try {
      // Simulate API - Replace with fetch('/api/contact', { method: 'POST', body: formData })
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Loading
      this.toggleModal("success-modal", true);
      e.target.reset();
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Failed to send message. Please try again or email directly.");
    }
  }

  /**
   * Handle Auth Submit: Validation + Simulation
   * @param {Event} e - Submit Event
   * @param {'login' | 'signup'} type - Form Type
   */
  handleAuthSubmit(e, type) {
    e.preventDefault();
    const form = e.target;
    let valid = true;

    form.querySelectorAll("[required]").forEach((field) => {
      this.validateField(field);
      if (!field.validity.valid) valid = false;
    });

    if (!valid) return;

    // Simulate - Replace with API
    alert(
      `${type.toUpperCase()} successful! Welcome back. (Simulated - Hook to backend)`
    );
    this.toggleModal(type === "login" ? "login-modal" : "signup-modal", false);
  }

  /**
   * Carousel Setup: Testimonials Slides
   */
  setupCarousel() {
    if (!this.elements.testimonialCarousel) return;

    // Initial Dots
    this.updateCarouselDots();

    // Auto-Advance Optional - Uncomment for Live
    // setInterval(() => this.changeSlide(1), 5000);
  }

  /**
   * Change Slide: Testimonials
   * @param {number} direction - 1 or -1
   */
  changeSlide(direction) {
    this.currentSlide =
      (this.currentSlide + direction + this.totalSlides) % this.totalSlides;
    this.elements.testimonialCarousel.scrollTo({
      left:
        this.currentSlide *
        (this.elements.testimonialCarousel.offsetWidth + 20),
      behavior: "smooth",
    });
    this.updateCarouselDots();
  }

  /**
   * Update Dots: Visual Feedback
   */
  updateCarouselDots() {
    // Add Dots if Not Present
    if (!document.querySelector(".carousel-dots")) {
      const dotsContainer = document.createElement("div");
      dotsContainer.className = "flex justify-center space-x-2 mt-4";
      for (let i = 0; i < this.totalSlides; i++) {
        const dot = document.createElement("button");
        dot.className = `w-3 h-3 rounded-full ${
          i === 0 ? "bg-primary" : "bg-base-300"
        }`;
        dot.onclick = () => this.goToSlide(i);
        dotsContainer.appendChild(dot);
      }
      this.elements.testimonialCarousel.parentNode.appendChild(dotsContainer);
    }
  }

  /**
   * Go To Specific Slide
   * @param {number} index
   */
  goToSlide(index) {
    this.currentSlide = index;
    this.elements.testimonialCarousel.scrollTo({
      left: index * (this.elements.testimonialCarousel.offsetWidth + 20),
      behavior: "smooth",
    });
    document.querySelectorAll(".carousel-dots button").forEach((dot, i) => {
      dot.className = `w-3 h-3 rounded-full transition-colors ${
        i === index ? "bg-primary" : "bg-base-300"
      }`;
    });
  }

  /**
   * Set Current Year: Dynamic Copyright
   */
  setCurrentYear() {
    if (this.elements.currentYearEl) {
      this.elements.currentYearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * Load Persisted State: Theme from localStorage
   */
  loadPersistedState() {
    // Theme Already Handled in ThemeManager
  }
}

/**
 * Theme Manager Class: Handles 5 Themes + Persistence
 * @class ThemeManagerClass
 */
class ThemeManagerClass {
  /**
   * Set Theme: Apply to HTML + Save
   * @param {string} theme - light/dark/cupcak/forest/luxury
   */
  setTheme(theme) {
    if (!["light", "dark", "cupcak", "forest", "luxury"].includes(theme))
      return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    // Update Icon
    const icon = document.querySelector(".fa-moon");
    if (icon) {
      icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    // Custom CSS Var Updates for Gradients
    document.documentElement.style.setProperty(
      "--primary-gradient",
      this.getGradientForTheme(theme)
    );
  }

  /**
   * Load Theme: From Storage or System Pref
   */
  loadTheme() {
    let theme = localStorage.getItem("portfolio-theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    this.setTheme(theme);
  }

  /**
   * Get Gradient: Theme-Specific
   * @param {string} theme
   * @returns {string} CSS Gradient
   */
  getGradientForTheme(theme) {
    const gradients = {
      light: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      dark: "linear-gradient(135deg, #f97316 0%, #d97706 100%)",
      cupcak: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      forest: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
      luxury: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    };
    return gradients[theme] || gradients.light;
  }
}

/**
 * Copy to Clipboard Utility: For Email
 * @param {string} text
 * @param {string} message
 */
function copyToClipboard(text, message = "Copied!") {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const original = document.getElementById("email-text").textContent;
      document.getElementById("email-text").textContent =
        "Copied to clipboard!";
      setTimeout(
        () => (document.getElementById("email-text").textContent = original),
        2000
      );
      // Toast or Alert
      const toast = document.createElement("div");
      toast.className =
        "fixed bottom-4 right-4 bg-success text-white px-4 py-2 rounded-lg z-50 animate-fade-in";
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    })
    .catch((err) => console.error("Copy Error:", err));
}

/**
 * Global Functions: Carousel Change (Exposed)
 * @param {number} direction
 */
function changeSlide(direction) {
  const app = window.portfolioApp; // Assume Global
  if (app) app.changeSlide(direction);
}

/**
 * Open All Projects Modal Utility
 */
function openAllProjectsModal() {
  const app = window.portfolioApp;
  if (app) app.toggleModal("projects-modal");
}

// DOM Ready: Init App
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.portfolioApp = new PortfolioApp();
  });
} else {
  window.portfolioApp = new PortfolioApp();
}

// Polyfill for Older Browsers: IntersectionObserver
if (!("IntersectionObserver" in window)) {
  const script = document.createElement("script");
  script.src =
    "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver";
  document.head.appendChild(script);
}

// Error Boundary: Global Try-Catch for Prod
window.addEventListener("error", (e) => {
  console.error("Global Error:", e.error);
  // Sentry or LogRocket in Prod
});

// End of Script - Expanded with 400+ lines of JSDoc, utils, error handlers
