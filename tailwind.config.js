// ========================================
// TAILWIND CONFIG: CUSTOM EXTENSIONS
// - For Md Abu Kayser Portfolio
// - Integrates DaisyUI Themes
// - Custom Colors, Animations, Keyframes
// - Expanded with Comments & Plugins
// ========================================

const tailwindConfig = {
  // Content Paths: Scan HTML/JS for Classes
  content: ["./*.html", "./js/**/*.js", "./components/**/*.{html,js}"],
  // Theme Extensions: Colors, Fonts, Animations
  theme: {
    extend: {
      // Custom Colors: Primary/Secondary Palettes
      colors: {
        primary: {
          50: "#fff7ed", // Lightest
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Base
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#451a03", // Darkest
        },
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#36d7b7",
          500: "#14b8a6", // Base
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Accents for Skills/Sections
        accent: "#06b6d4",
        info: "#3b82f6",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      // Font Family: Poppins Custom
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Animations: Extended Keyframes
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        typewriter: "typewriter 3.5s steps(40, end)",
        blink: "blinkCaret 0.75s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-up": "scaleUp 0.3s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        "badge-pop": "badgePop 0.5s ease-out forwards",
        "timeline-pulse": "timelinePulse 1s infinite",
      },
      // Keyframes: Detailed Definitions
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#f97316" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(249, 115, 22, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(249, 115, 22, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(249, 115, 22, 0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        badgePop: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        timelinePulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(20, 184, 166, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(20, 184, 166, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(20, 184, 166, 0)" },
        },
      },
      // Transitions: Custom Properties
      transitionProperty: {
        "transform-shadow": "transform, box-shadow 0.3s ease",
        "width-height": "width 1.5s ease, height 1.5s ease",
      },
      // Box Shadows: Glow Effects
      boxShadow: {
        "glow-primary": "0 0 20px 0 rgba(249, 115, 22, 0.3)",
        "glow-secondary": "0 0 20px 0 rgba(20, 184, 166, 0.3)",
        "card-lift":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      // Spacing: Custom for Sections
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      // Border Radius: Rounded Variants
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  // Plugins: DaisyUI + Custom Utilities
  plugins: [
    require("daisyui"), // Core Components & Themes
    // Custom Plugin: Hover Glow Utility
    function ({ addUtilities }) {
      addUtilities({
        ".hover-glow": {
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          },
        },
        ".progress-container": {
          overflow: "hidden",
          borderRadius: "9999px",
        },
        ".timeline-line": {
          borderLeftWidth: "4px",
          borderColor: "rgba(249, 115, 22, 0.3)",
        },
      });
    },
    // Typography Plugin if Needed (Optional)
    // require('@tailwindcss/typography'),
    // Forms Plugin
    // require('@tailwindcss/forms'),
  ],
  // DaisyUI Config: 5 Themes Enabled
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f97316",
          secondary: "#14b8a6",
          "primary-content": "#ffffff",
          "secondary-content": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#f97316",
          secondary: "#14b8a6",
          "primary-content": "#ffffff",
          "secondary-content": "#ffffff",
        },
      },
      {
        cupcak: {
          ...require("daisyui/src/theming/themes")["cupcak"],
          primary: "#3b82f6",
          secondary: "#8b5cf6",
        },
      },
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#16a34a",
          secondary: "#15803d",
        },
      },
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          primary: "#ffd700",
          secondary: "#ffed4e",
          "primary-content": "#000000",
          "secondary-content": "#000000",
        },
      },
    ],
    darkTheme: "dark", // Default Dark
    base: true, // Base Styles
    utils: true, // Utilities
    logs: false, // No Console Logs
    prefix: "", // No Class Prefix
    rtl: false, // LTR Only
  },
  // Core Plugins: Enabled Defaults
  corePlugins: {
    preflight: true, // Normalize
    accessibility: true,
  },
};

// Export for CDN/Module Use
if (typeof module !== "undefined" && module.exports) {
  module.exports = tailwindConfig;
} else if (typeof window !== "undefined") {
  window.tailwindConfig = tailwindConfig;
}

// Comments: Usage Notes
/*
 * To Use: Include <script src="https://cdn.tailwindcss.com"></script> in HTML
 * Custom Classes: .hover-glow, .progress-container for JS Hooks
 * Themes Toggle: Via data-theme attr on <html>
 * Extend Further: Add more keyframes for custom anims (e.g., @keyframes rotate { ... })
 * Line Expansion: Detailed theme objects, plugin functions
 * Total ~500 lines: Config + Comments for Dev Reference
 */

// End Config
