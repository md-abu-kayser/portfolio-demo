// Advanced Theme Switcher with 5 Themes
class ThemeSwitcher {
  constructor() {
    this.themes = ["light", "dark", "blue", "green", "purple", "orange"];
    this.currentTheme = this.getStoredTheme() || "light";
    this.switcher = document.getElementById("theme-switcher");
    this.dropdown = document.getElementById("theme-dropdown");

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
    this.renderThemeOptions();
  }

  setupEventListeners() {
    // Toggle dropdown
    this.switcher?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleDropdown();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      this.hideDropdown();
    });

    // Prevent dropdown close when clicking inside
    this.dropdown?.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hideDropdown();
    });
  }

  renderThemeOptions() {
    if (!this.dropdown) return;

    this.dropdown.innerHTML = this.themes
      .map(
        (theme) => `
      <div class="theme-option" data-theme="${theme}">
        <div class="theme-preview ${theme}"></div>
        <span class="capitalize">${theme}</span>
        ${
          this.currentTheme === theme
            ? '<i class="fas fa-check ml-auto text-primary-500"></i>'
            : ""
        }
      </div>
    `
      )
      .join("");

    // Add click listeners to theme options
    this.dropdown.querySelectorAll(".theme-option").forEach((option) => {
      option.addEventListener("click", () => {
        const theme = option.dataset.theme;
        this.switchTheme(theme);
        this.hideDropdown();
      });
    });
  }

  toggleDropdown() {
    if (this.dropdown.classList.contains("hidden")) {
      this.showDropdown();
    } else {
      this.hideDropdown();
    }
  }

  showDropdown() {
    this.dropdown.classList.remove("hidden");
    this.dropdown.style.animation = "fadeIn 0.2s ease-out";
  }

  hideDropdown() {
    this.dropdown.style.animation = "fadeOut 0.2s ease-in";
    setTimeout(() => {
      this.dropdown.classList.add("hidden");
    }, 150);
  }

  switchTheme(theme) {
    if (!this.themes.includes(theme)) return;

    // Add transition class for smooth theme change
    document.documentElement.classList.add("theme-transition");

    this.currentTheme = theme;
    this.applyTheme(theme);
    this.storeTheme(theme);
    this.renderThemeOptions();

    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    // Update meta theme-color for mobile browsers
    const themeColor = this.getThemeColor(theme);
    this.updateMetaThemeColor(themeColor);

    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent("themeChanged", { detail: theme }));
  }

  getThemeColor(theme) {
    const colors = {
      light: "#3b82f6",
      dark: "#1f2937",
      blue: "#2563eb",
      green: "#059669",
      purple: "#7c3aed",
      orange: "#ea580c",
    };
    return colors[theme] || colors.light;
  }

  updateMetaThemeColor(color) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = color;
  }

  storeTheme(theme) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {
      console.warn("Could not store theme preference:", e);
    }
  }

  getStoredTheme() {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch (e) {
      console.warn("Could not retrieve stored theme:", e);
      return null;
    }
  }

  // Public method to get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Public method to cycle through themes
  cycleTheme() {
    const currentIndex = this.themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.switchTheme(this.themes[nextIndex]);
  }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.themeSwitcher = new ThemeSwitcher();
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = ThemeSwitcher;
}
