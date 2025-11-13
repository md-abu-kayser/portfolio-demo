/**
 * ========================================
 * ADVANCED THEME SWITCHER
 * Enhanced: 5 Professional Themes with Smooth Transitions
 * ========================================
 */

class ThemeSwitcher {
  constructor() {
    this.availableThemes = ["light", "dark", "cupcake", "forest", "luxury"];
    this.currentTheme = this.getSavedTheme() || this.getSystemTheme();
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.createThemeSelector();
    this.bindThemeEvents();
    this.setupThemeObserver();
  }

  getSavedTheme() {
    return localStorage.getItem("portfolio-theme");
  }

  getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  applyTheme(theme) {
    if (!this.availableThemes.includes(theme)) {
      theme = "light";
    }

    document.documentElement.setAttribute("data-theme", theme);
    this.currentTheme = theme;
    localStorage.setItem("portfolio-theme", theme);

    this.updateThemeIndicator(theme);
    this.dispatchThemeChangeEvent(theme);
  }

  createThemeSelector() {
    // Create theme selector UI if it doesn't exist
    if (!document.getElementById("theme-selector")) {
      const selector = document.createElement("div");
      selector.id = "theme-selector";
      selector.className = "theme-selector";
      selector.innerHTML = this.generateThemeSelectorHTML();
      document.body.appendChild(selector);
    }
  }

  generateThemeSelectorHTML() {
    return `
            <div class="theme-selector-dropdown">
                <button class="theme-selector-toggle" aria-label="Change theme">
                    <i class="fas fa-palette"></i>
                    <span>Themes</span>
                </button>
                <div class="theme-selector-menu">
                    ${this.availableThemes
                      .map(
                        (theme) => `
                        <button class="theme-option ${
                          theme === this.currentTheme ? "active" : ""
                        }" 
                                data-theme="${theme}" 
                                aria-label="Switch to ${theme} theme">
                            <span class="theme-preview theme-${theme}"></span>
                            <span class="theme-name">${this.capitalizeFirst(
                              theme
                            )}</span>
                        </button>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  bindThemeEvents() {
    // Theme option clicks
    document.addEventListener("click", (e) => {
      if (e.target.closest(".theme-option")) {
        const theme = e.target.closest(".theme-option").dataset.theme;
        this.applyTheme(theme);
        this.closeThemeMenu();
      }

      // Toggle theme menu
      if (e.target.closest(".theme-selector-toggle")) {
        this.toggleThemeMenu();
      }

      // Close theme menu when clicking outside
      if (!e.target.closest(".theme-selector")) {
        this.closeThemeMenu();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeThemeMenu();
      }
    });

    // System theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      if (!this.getSavedTheme()) {
        // Only auto-switch if no manual preference
        this.applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  toggleThemeMenu() {
    const menu = document.querySelector(".theme-selector-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }

  closeThemeMenu() {
    const menu = document.querySelector(".theme-selector-menu");
    if (menu) {
      menu.classList.remove("active");
    }
  }

  updateThemeIndicator(theme) {
    // Update active state in theme selector
    document.querySelectorAll(".theme-option").forEach((option) => {
      option.classList.toggle("active", option.dataset.theme === theme);
    });

    // Update theme toggle button icon
    const toggleIcon = document.querySelector(".theme-selector-toggle i");
    if (toggleIcon) {
      const icons = {
        light: "fa-sun",
        dark: "fa-moon",
        cupcake: "fa-cupcake",
        forest: "fa-tree",
        luxury: "fa-crown",
      };
      toggleIcon.className = `fas ${icons[theme] || "fa-palette"}`;
    }
  }

  setupThemeObserver() {
    // Observe for theme-related changes in CSS
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          this.handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  handleThemeChange() {
    // Add smooth transition class
    document.documentElement.classList.add("theme-transition");

    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    // Update meta theme color for mobile browsers
    this.updateMetaThemeColor();
  }

  updateMetaThemeColor() {
    let themeColor = "#667eea"; // Default primary color

    switch (this.currentTheme) {
      case "dark":
        themeColor = "#1e293b";
        break;
      case "cupcake":
        themeColor = "#65c3c8";
        break;
      case "forest":
        themeColor = "#1c1917";
        break;
      case "luxury":
        themeColor = "#000000";
        break;
    }

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = themeColor;
  }

  dispatchThemeChangeEvent(theme) {
    const event = new CustomEvent("themeChanged", {
      detail: {
        theme: theme,
        timestamp: new Date().toISOString(),
      },
    });
    window.dispatchEvent(event);
  }

  capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Public method to get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Public method to set theme programmatically
  setTheme(theme) {
    this.applyTheme(theme);
  }

  // Cycle through themes (for demo purposes)
  cycleThemes() {
    const currentIndex = this.availableThemes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.availableThemes.length;
    this.applyTheme(this.availableThemes[nextIndex]);
  }
}

// Initialize theme switcher
document.addEventListener("DOMContentLoaded", () => {
  window.themeSwitcher = new ThemeSwitcher();
});

// Add CSS for theme selector
const themeSelectorCSS = `
.theme-selector {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 1000;
}

.theme-selector-dropdown {
    position: relative;
}

.theme-selector-toggle {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 50px;
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    color: var(--text-primary);
    font-weight: 500;
}

.theme-selector-toggle:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.theme-selector-menu {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 150px;
    box-shadow: var(--shadow-xl);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
}

.theme-selector-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.theme-option {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 8px 12px;
    border: none;
    background: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--text-primary);
}

.theme-option:hover {
    background: var(--bg-tertiary);
}

.theme-option.active {
    background: var(--primary-color);
    color: white;
}

.theme-preview {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--border-color);
}

.theme-light { background: linear-gradient(135deg, #667eea, #764ba2); }
.theme-dark { background: linear-gradient(135deg, #818cf8, #a78bfa); }
.theme-cupcake { background: linear-gradient(135deg, #65c3c8, #eeaf3a); }
.theme-forest { background: linear-gradient(135deg, #1d4ed8, #047857); }
.theme-luxury { background: linear-gradient(135deg, #fbbf24, #d97706); }

.theme-transition * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
}

@media (max-width: 768px) {
    .theme-selector {
        bottom: 20px;
        left: 20px;
    }
    
    .theme-selector-toggle span {
        display: none;
    }
}
`;

// Inject theme selector styles
const styleSheet = document.createElement("style");
styleSheet.textContent = themeSelectorCSS;
document.head.appendChild(styleSheet);
