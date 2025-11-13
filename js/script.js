/**
 * ========================================
 * WORLD-CLASS PORTFOLIO SCRIPT - MD ABU KAYSER
 * Enhanced: Professional, Responsive, Accessible
 * Total Lines: 800+ with detailed documentation
 * ========================================
 */

class PortfolioApp {
  constructor() {
    this.currentTheme = "light";
    this.isMobileMenuOpen = false;
    this.currentTestimonial = 0;
    this.testimonials = [];
    this.projects = [];

    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.loadData();
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupBackToTop();
    this.setCurrentYear();
    this.initThemeSwitcher();

    console.log("🚀 Portfolio App Initialized - World Class Ready!");
  }

  cacheElements() {
    this.elements = {
      // Navigation
      mobileMenuBtn: document.getElementById("mobile-menu-btn"),
      mobileMenu: document.getElementById("mobile-menu"),
      mobileOverlay: document.getElementById("mobile-overlay"),
      closeMobileMenu: document.getElementById("close-mobile-menu"),
      navbar: document.getElementById("navbar"),

      // Theme
      themeToggle: document.getElementById("theme-toggle"),
      themeLinks: document.querySelectorAll("[data-theme]"),

      // Sections
      heroSection: document.getElementById("home"),
      skillBars: document.querySelectorAll(".skill-progress-bar"),
      projectCards: document.querySelectorAll(".project-card"),
      testimonialCarousel: document.getElementById("testimonial-carousel"),
      contactForm: document.getElementById("contact-form"),

      // Modals
      projectModal: document.getElementById("projects-modal"),
      modalClose: document.querySelectorAll(".modal-close"),
      modalOverlay: document.querySelectorAll(".modal-overlay"),

      // Back to Top
      backToTop: document.getElementById("back-to-top"),

      // Dynamic Content
      currentYear: document.getElementById("current-year"),
    };
  }

  bindEvents() {
    // Mobile Menu
    if (this.elements.mobileMenuBtn) {
      this.elements.mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMobileMenu();
      });
    }
    if (this.elements.closeMobileMenu) {
      this.elements.closeMobileMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMobileMenu();
      });
    }
    if (this.elements.mobileOverlay) {
      this.elements.mobileOverlay.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMobileMenu();
      });
    }

    // Theme Switching with proper dropdown handling
    this.elements.themeLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const theme = link.getAttribute("data-theme");
        if (theme) {
          this.setTheme(theme);
          // Close mobile menu if open on mobile, but keep desktop clean
          if (window.innerWidth < 1024 && this.isMobileMenuOpen) {
            this.toggleMobileMenu();
          }
          // Close dropdown on desktop
          document.body.click();
        }
      });
    });

    // Auth Modal Handlers
    const authToggle = document.getElementById("auth-toggle");
    const mobileAuth = document.getElementById("mobile-auth");
    if (authToggle) {
      authToggle.addEventListener("click", () => this.openAuthModal());
    }
    if (mobileAuth) {
      mobileAuth.addEventListener("click", () => {
        this.toggleMobileMenu();
        this.openAuthModal();
      });
    }

    // Navigation
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => this.handleSmoothScroll(e));
    });

    // Form Submission
    if (this.elements.contactForm) {
      this.elements.contactForm.addEventListener("submit", (e) =>
        this.handleContactSubmit(e)
      );
    }

    // Modal Handling
    this.elements.modalClose.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => this.closeAllModals());
    });

    this.elements.modalOverlay.forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.closeAllModals();
      });
    });

    // Window Events
    window.addEventListener("scroll", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleResize());
    window.addEventListener("keydown", (e) => this.handleKeydown(e));

    // Project Card Interactions
    this.elements.projectCards.forEach((card) => {
      card.addEventListener("click", () =>
        this.openProjectModal(card.dataset.projectId)
      );
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.elements.mobileMenu) {
      this.elements.mobileMenu.classList.toggle("translate-x-full");
    }
    if (this.elements.mobileOverlay) {
      this.elements.mobileOverlay.classList.toggle("hidden");
    }

    // Toggle menu button icon
    if (this.elements.mobileMenuBtn) {
      const icon = this.elements.mobileMenuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    }

    document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    this.updateThemeIcon(theme);
    this.dispatchThemeChangeEvent(theme);
  }

  initThemeSwitcher() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const theme = savedTheme || systemTheme;

    this.setTheme(theme);
  }

  updateThemeIcon(theme) {
    const icon = this.elements.themeToggle?.querySelector("i");
    if (!icon) return;

    const icons = {
      light: "fa-moon",
      dark: "fa-sun",
      cupcake: "fa-cupcake",
      forest: "fa-tree",
      luxury: "fa-crown",
    };

    icon.className = `fas ${icons[theme] || "fa-moon"}`;
  }

  handleSmoothScroll(e) {
    const targetId = e.currentTarget.getAttribute("href");

    if (targetId === "#" || !targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navbarHeight = this.elements.navbar?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (this.isMobileMenuOpen) {
        this.toggleMobileMenu();
      }
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // Animate skill bars
          if (entry.target.classList.contains("skill-item")) {
            this.animateSkillBars();
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document
      .querySelectorAll(".skill-item, .project-card, .testimonial-card")
      .forEach((el) => {
        observer.observe(el);
      });
  }

  animateSkillBars() {
    if (this.skillsAnimated) return; // Prevent re-animation
    this.skillsAnimated = true;

    this.elements.skillBars.forEach((bar, index) => {
      const width = bar.getAttribute("data-width") || "100%";
      setTimeout(() => {
        bar.style.width = width;
        bar.style.transition =
          "width 1.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.8s ease";
      }, index * 100); // Stagger animation
    });
  }

  setupSmoothScrolling() {
    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", this.handleSmoothScroll.bind(this));
    });
  }

  setupBackToTop() {
    if (!this.elements.backToTop) return;

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        this.elements.backToTop.classList.remove("opacity-0", "invisible");
        this.elements.backToTop.classList.add("opacity-100", "visible");
      } else {
        this.elements.backToTop.classList.add("opacity-0", "invisible");
        this.elements.backToTop.classList.remove("opacity-100", "visible");
      }
    });

    this.elements.backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  handleScroll() {
    // Navbar background on scroll
    if (this.elements.navbar) {
      if (window.scrollY > 100) {
        this.elements.navbar.classList.add("navbar--scrolled");
      } else {
        this.elements.navbar.classList.remove("navbar--scrolled");
      }
    }
  }

  handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  handleKeydown(e) {
    // Close modals on Escape key
    if (e.key === "Escape") {
      this.closeAllModals();
    }

    // Close mobile menu on Escape key
    if (e.key === "Escape" && this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  async handleContactSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!this.validateForm(data)) {
      this.showNotification(
        "Please fill all required fields correctly.",
        "error"
      );
      return;
    }

    // Show loading state
    this.setFormLoading(true);

    try {
      // Simulate API call
      await this.simulateAPICall(data);

      this.showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      e.target.reset();
    } catch (error) {
      this.showNotification(
        "Failed to send message. Please try again.",
        "error"
      );
      console.error("Contact form error:", error);
    } finally {
      this.setFormLoading(false);
    }
  }

  validateForm(data) {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return false;
    }

    if (!this.isValidEmail(email)) {
      return false;
    }

    if (message.length < 10) {
      return false;
    }

    return true;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  setFormLoading(loading) {
    const submitBtn = this.elements.contactForm?.querySelector(
      'button[type="submit"]'
    );
    if (!submitBtn) return;

    if (loading) {
      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      submitBtn.innerHTML = "<span>Sending...</span>";
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove("loading");
      submitBtn.innerHTML =
        '<span>Send Message</span><i class="fas fa-paper-plane ml-2"></i>';
    }
  }

  async simulateAPICall(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        Math.random() > 0.1 ? resolve() : reject(new Error("API Error"));
      }, 2000);
    });
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

    document.body.appendChild(notification);

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;

    // Close button
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.style.animation = "slideInRight 0.3s ease reverse";
      setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideInRight 0.3s ease reverse";
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  getNotificationIcon(type) {
    const icons = {
      success: "check-circle",
      error: "exclamation-circle",
      warning: "exclamation-triangle",
      info: "info-circle",
    };
    return icons[type] || "info-circle";
  }

  getNotificationColor(type) {
    const colors = {
      success: "#10b981",
      error: "#ef4444",
      warning: "#f59e0b",
      info: "#3b82f6",
    };
    return colors[type] || "#3b82f6";
  }

  openProjectModal(projectId) {
    const project = this.projects.find((p) => p.id === projectId);
    if (!project || !this.elements.projectModal) return;

    this.elements.projectModal.innerHTML =
      this.generateProjectModalContent(project);
    this.elements.projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  generateProjectModalContent(project) {
    return `
            <div class="modal-overlay active">
                <div class="modal-content">
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="project-modal-header">
                        <h2>${project.title}</h2>
                        <div class="project-meta">
                            <span class="project-date">${project.date}</span>
                            <span class="project-category">${
                              project.category
                            }</span>
                        </div>
                    </div>
                    <div class="project-modal-body">
                        <div class="project-gallery">
                            ${project.images
                              .map(
                                (img) => `
                                <img src="${img}" alt="${project.title}" loading="lazy">
                            `
                              )
                              .join("")}
                        </div>
                        <div class="project-details">
                            <h3>Project Overview</h3>
                            <p>${project.description}</p>
                            
                            <h4>Technologies Used</h4>
                            <div class="tech-stack">
                                ${project.technologies
                                  .map(
                                    (tech) => `
                                    <span class="tech-badge">${tech}</span>
                                `
                                  )
                                  .join("")}
                            </div>
                            
                            <h4>Key Features</h4>
                            <ul class="project-features">
                                ${project.features
                                  .map(
                                    (feature) => `
                                    <li>${feature}</li>
                                `
                                  )
                                  .join("")}
                            </ul>
                            
                            <div class="project-links">
                                ${
                                  project.links.demo
                                    ? `
                                    <a href="${project.links.demo}" target="_blank" class="btn btn-primary">
                                        <i class="fas fa-external-link-alt"></i>
                                        Live Demo
                                    </a>
                                `
                                    : ""
                                }
                                ${
                                  project.links.github
                                    ? `
                                    <a href="${project.links.github}" target="_blank" class="btn btn-secondary">
                                        <i class="fab fa-github"></i>
                                        GitHub
                                    </a>
                                `
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.body.style.overflow = "";
  }

  loadData() {
    this.loadProjects();
    this.loadTestimonials();
  }

  loadProjects() {
    this.projects = [
      {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        date: "2024",
        category: "Full Stack",
        description:
          "A comprehensive e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
        features: [
          "Real-time inventory management",
          "Secure payment processing with Stripe",
          "Admin dashboard with analytics",
          "User authentication & authorization",
          "Responsive design for all devices",
        ],
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        links: {
          demo: "https://ecommerce-demo.kayser.dev",
          github: "https://github.com/md-abu-kayser/ecommerce-platform",
        },
      },
      // Add more projects here...
    ];
  }

  loadTestimonials() {
    this.testimonials = [
      {
        name: "Sarah Johnson",
        position: "CTO, TechStart Inc.",
        company: "US-Based Startup",
        content:
          "Abu delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 5,
      },
      // Add more testimonials here...
    ];
  }

  setCurrentYear() {
    if (this.elements.currentYear) {
      this.elements.currentYear.textContent = new Date().getFullYear();
    }
  }

  dispatchThemeChangeEvent(theme) {
    const event = new CustomEvent("themeChanged", { detail: { theme } });
    window.dispatchEvent(event);
  }

  openAuthModal() {
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center modal-auth";
    modal.innerHTML = `
      <div class="card bg-base-100 shadow-2xl max-w-md w-full mx-4 animate-bounce-in">
        <div class="card-body">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-base-content">Get Started</h3>
            <button class="btn btn-sm btn-circle btn-ghost close-auth-modal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="divider"></div>
          <div class="flex flex-col gap-4">
            <a href="./auth/login.html" class="btn btn-primary w-full">
              <i class="fas fa-sign-in-alt mr-2"></i>Login
            </a>
            <a href="./auth/signup.html" class="btn btn-secondary w-full">
              <i class="fas fa-user-plus mr-2"></i>Sign Up
            </a>
          </div>
          <p class="text-center text-sm text-base-content/60 mt-4">
            New here? Create an account to get started
          </p>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelectorAll(".close-auth-modal").forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.remove();
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.portfolioApp = new PortfolioApp();
});

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = PortfolioApp;
}
