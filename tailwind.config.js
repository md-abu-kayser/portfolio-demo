/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content Paths For Optimization
  // --------------------------------------------->
  content: [
    "./*.html",
    "./auth/*.html",
    "./js/**/*.js",
    "./components/**/*.html",
    "./css/**/*.css",
  ],

  // Safelist for dynamic classes
  // ----------------------------------------->
  safelist: [
    "animate-fade-in-up",
    "animate-fade-in-down",
    "animate-fade-in-left",
    "animate-fade-in-right",
    "animate-bounce-in",
    "animate-float",
    "animate-pulse-soft",
    "animate-shimmer",
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "text-primary",
    "text-secondary",
    "border-primary",
    "border-secondary",
    "hover:bg-primary",
    "hover:bg-secondary",
  ],

  // Dark mode configuration
  darkMode: ["class", '[data-theme="dark"]'],

  // theme extensions
  theme: {
    extend: {
      colors: {
        // Primary Color Palette - Orange
        // ----------------------------------------------------->
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#451a03",
          DEFAULT: "#f97316",
        },

        // Secondary Color Palette - Teal
        // ----------------------------------------------------->
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
          DEFAULT: "#14b8a6",
        },

        // Accent Color Palette - Blue
        // ----------------------------------------------------->
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          DEFAULT: "#3b82f6",
        },

        // Success Color Palette - Green
        // ----------------------------------------------------->
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
          DEFAULT: "#22c55e",
        },

        // Warning Color Palette - Amber
        // ----------------------------------------------------->
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
          DEFAULT: "#f59e0b",
        },

        // Error Color Palette - Red
        // ----------------------------------------------------->
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
          DEFAULT: "#ef4444",
        },

        // Info Color Palette - Sky Blue
        // ----------------------------------------------------->
        info: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
          DEFAULT: "#0ea5e9",
        },

        // Neutral Color Palette - Gray
        // ----------------------------------------------------->
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
          DEFAULT: "#71717a",
        },
      },

      // typography
      fontFamily: {
        // Primary font family
        // ----------------------------------------------------->
        poppins: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],

        // Monospace for code
        // ----------------------------------------------------->
        mono: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],

        // Secondary font option
        // ----------------------------------------------------->
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },

      fontSize: {
        // font sizes with better line heights
        // ----------------------------------------------------->
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.01em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.005em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.005em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.015em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.05em" }],

        // Custom sizes for portfolio
        // ----------------------------------------------------->
        hero: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        heading: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        title: ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        subtitle: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.005em" }],
        body: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0em" }],
        caption: ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
      },

      fontWeight: {
        // font weights
        // ----------------------------------------------------->
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      // animation
      // ----------------------------------------------------->
      animation: {
        // Fade animations
        // ----------------------------------------------------->
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",

        // Slide animations
        // ----------------------------------------------------->
        "slide-in-up": "slideInUp 0.6s ease-out forwards",
        "slide-in-down": "slideInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",

        // Scale animations
        // ----------------------------------------------------->
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "scale-out": "scaleOut 0.5s ease-out forwards",
        "bounce-in": "bounceIn 0.8s ease-out forwards",

        // Special animations
        // ----------------------------------------------------->
        float: "float 6s ease-in-out infinite",
        typewriter: "typewriter 3.5s steps(40, end) forwards",
        "blink-caret": "blinkCaret 0.75s step-end infinite",
        "pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-soft": "pingSoft 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        gradient: "gradient 3s ease infinite",
        "bounce-gentle": "bounceGentle 2s infinite",

        // animations
        // ----------------------------------------------------->
        "zoom-in": "zoomIn 0.5s ease-out forwards",
        "flip-in-x": "flipInX 0.8s ease-out forwards",
        "flip-in-y": "flipInY 0.8s ease-out forwards",
        "light-speed-in": "lightSpeedIn 0.8s ease-out forwards",

        // Loading animations
        // ----------------------------------------------------->
        "progress-load": "progressLoad 2s ease-in-out infinite",
        "dot-pulse": "dotPulse 1.5s ease-in-out infinite",
      },

      // keyframes
      // ----------------------------------------------------->
      keyframes: {
        // Fade keyframes
        // ----------------------------------------------------->
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(40px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },

        // Slide keyframes
        // ----------------------------------------------------->
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },

        // Scale keyframes
        // ----------------------------------------------------->
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        scaleOut: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
        },
        bounceIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) rotate(-5deg)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05) rotate(2deg)",
          },
          "70%": {
            transform: "scale(0.95) rotate(-1deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },

        // Special effect keyframes
        // ----------------------------------------------------->
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-15px) rotate(1deg)",
          },
          "66%": {
            transform: "translateY(-8px) rotate(-1deg)",
          },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blinkCaret: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        pulseSoft: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.02)",
          },
        },
        pingSoft: {
          "75%, 100%": {
            transform: "scale(1.8)",
            opacity: "0",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0.4",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0.8",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        bounceGentle: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-8px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        // animation keyframes
        // ----------------------------------------------------->
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        flipInX: {
          "0%": {
            opacity: "0",
            transform: "perspective(400px) rotateX(90deg)",
          },
          "40%": {
            transform: "perspective(400px) rotateX(-10deg)",
          },
          "70%": {
            transform: "perspective(400px) rotateX(10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "perspective(400px) rotateX(0deg)",
          },
        },
        flipInY: {
          "0%": {
            opacity: "0",
            transform: "perspective(400px) rotateY(90deg)",
          },
          "40%": {
            transform: "perspective(400px) rotateY(-10deg)",
          },
          "70%": {
            transform: "perspective(400px) rotateY(10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "perspective(400px) rotateY(0deg)",
          },
        },
        lightSpeedIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%) skewX(-30deg)",
          },
          "60%": {
            opacity: "1",
            transform: "skewX(20deg)",
          },
          "80%": {
            transform: "skewX(-5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) skewX(0deg)",
          },
        },

        // Loading keyframes
        // ----------------------------------------------------->
        progressLoad: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0.6",
          },
        },
        dotPulse: {
          "0%, 100%": {
            transform: "scale(0.8)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
        },
      },

      // spacing and sizing
      // ----------------------------------------------------->
      spacing: {
        // spacing scale
        // ----------------------------------------------------->
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",

        // Custom spacing for portfolio
        // ----------------------------------------------------->
        "nav-height": "4rem",
        "hero-height": "calc(100vh - 4rem)",
        "section-padding": "5rem",
        "container-padding": "2rem",
      },

      // border radius
      // ----------------------------------------------------->
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        full: "9999px",

        // Custom border radius
        // ----------------------------------------------------->
        card: "1.5rem",
        button: "0.75rem",
        input: "0.75rem",
        modal: "1.5rem",
        avatar: "50%",
      },

      // box shadow
      // ----------------------------------------------------->
      boxShadow: {
        // Material Design
        // ----------------------------------------------------->
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",

        // Custom shadows for portfolio
        // ----------------------------------------------------->
        card: "0 10px 40px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 20px 50px rgba(0, 0, 0, 0.15)",
        navbar: "0 4px 20px rgba(0, 0, 0, 0.08)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        float: "0 20px 40px rgba(0, 0, 0, 0.1)",

        // Glow effects
        // ----------------------------------------------------->
        "glow-sm": "0 0 10px rgba(249, 115, 22, 0.3)",
        "glow-md": "0 0 20px rgba(249, 115, 22, 0.3)",
        "glow-lg": "0 0 40px rgba(249, 115, 22, 0.3)",
        "glow-primary": "0 0 20px rgba(249, 115, 22, 0.4)",
        "glow-secondary": "0 0 20px rgba(20, 184, 166, 0.4)",
        "glow-accent": "0 0 20px rgba(59, 130, 246, 0.4)",

        // Inner shadows
        // ----------------------------------------------------->
        "inner-sm": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        "inner-md": "inset 0 4px 6px 0 rgb(0 0 0 / 0.1)",
        "inner-lg": "inset 0 10px 15px 0 rgb(0 0 0 / 0.1)",
      },

      // background iamges
      // ----------------------------------------------------->
      backgroundImage: {
        // Gradient backgrounds
        // ----------------------------------------------------->
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        // Custom gradients
        // ----------------------------------------------------->
        "primary-gradient": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "secondary-gradient":
          "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
        "accent-gradient": "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient": "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",

        // Pattern backgrounds
        // ----------------------------------------------------->
        "grid-pattern": `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
        "dot-pattern":
          "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
        "noise-pattern": `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      },

      // background sizes
      // ----------------------------------------------------->
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        grid: "50px 50px",
        dot: "20px 20px",
      },

      // Transitions
      // ----------------------------------------------------->
      transitionProperty: {
        // Transition properties
        // ----------------------------------------------------->
        none: "none",
        all: "all",
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
        size: "width, height",
        spacing: "margin, padding",

        // Custom transitions
        theme: "color, background-color, border-color",
        layout: "all",
        smooth: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        // transition durations
        // ----------------------------------------------------->
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",

        // Custom durations
        // ----------------------------------------------------->
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
        slower: "700ms",
      },

      transitionTimingFunction: {
        // Timing Functions
        // ----------------------------------------------------->
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",

        // Custom Timing
        // ----------------------------------------------------->
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },

      // z-index
      // ----------------------------------------------------->
      zIndex: {
        // z-index scale
        // ----------------------------------------------------->
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        auto: "auto",

        // Custom z-index for portfolio
        // ----------------------------------------------------->
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
        toast: "1080",
        notification: "1090",
      },

      // opacity
      // ----------------------------------------------------->
      opacity: {
        // opacity scale
        // ----------------------------------------------------->
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
      },

      // blur
      // ----------------------------------------------------->
      backdropBlur: {
        // blur scale
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },

      // scroll behavior
      // ----------------------------------------------------->
      scrollBehavior: {
        auto: "auto",
        smooth: "smooth",
      },

      // aspect ratio
      // ----------------------------------------------------->
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        portrait: "3 / 4",
        landscape: "4 / 3",
        ultrawide: "21 / 9",
        golden: "1.618 / 1",
      },

      // fill and stroke
      // ----------------------------------------------------->
      fill: {
        current: "currentColor",
        primary: "#f97316",
        secondary: "#14b8a6",
        accent: "#3b82f6",
      },

      stroke: {
        current: "currentColor",
        primary: "#f97316",
        secondary: "#14b8a6",
        accent: "#3b82f6",
      },

      strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },

  // plugins
  // ----------------------------------------------------->
  plugins: [
    // DaisyUI-----> components and themes
    // ----------------------------------------------------->
    require("daisyui"),

    // Custom plugin---------> additional utilities
    // ----------------------------------------------------->
    function ({ addUtilities, addComponents, addBase, theme }) {
      // Add base styles
      addBase({
        ":root": {
          "--primary": theme("colors.primary.500"),
          "--secondary": theme("colors.secondary.500"),
          "--accent": theme("colors.accent.500"),
          "--success": theme("colors.success.500"),
          "--warning": theme("colors.warning.500"),
          "--error": theme("colors.error.500"),
          "--info": theme("colors.info.500"),
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          fontFamily: theme("fontFamily.poppins"),
          lineHeight: "1.6",
        },
      });

      // Add new utilities
      // ----------------------------------------------------->
      const newUtilities = {
        // Text utilities
        // ----------------------------------------------------->
        ".text-balance": {
          textWrap: "balance",
        },
        ".text-pretty": {
          textWrap: "pretty",
        },
        ".text-gradient": {
          background:
            "linear-gradient(135deg, var(--primary), var(--secondary))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          textShadow:
            "0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-lg": {
          textShadow:
            "0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },

        // Background utilities
        // ----------------------------------------------------->
        ".bg-glass": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        ".bg-grid": {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        },
        ".bg-dots": {
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        },

        // Border utilities
        // ----------------------------------------------------->
        ".border-gradient": {
          borderImage:
            "linear-gradient(135deg, var(--primary), var(--secondary)) 1",
        },

        // Animation utilities
        // ----------------------------------------------------->
        ".animate-pause": {
          animationPlayState: "paused",
        },
        ".animate-running": {
          animationPlayState: "running",
        },

        // Scroll utilities
        // ----------------------------------------------------->
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          "-ms-overflow-style": "auto",
          "scrollbar-width": "auto",
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },

        // Layout utilities
        // ----------------------------------------------------->
        ".backface-visible": {
          backfaceVisibility: "visible",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);

      // Add new components
      // ----------------------------------------------------->
      const newComponents = {
        // Button components
        // ----------------------------------------------------->
        ".btn-gradient": {
          background:
            "linear-gradient(135deg, var(--primary), var(--secondary))",
          color: "white",
          border: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          },
        },

        // Card components
        // ----------------------------------------------------->
        ".card-hover": {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
        },

        // Glass components
        // ----------------------------------------------------->
        ".glass-effect": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },

        // Skill bar components
        // ----------------------------------------------------->
        ".skill-progress": {
          height: "12px",
          backgroundColor: theme("colors.gray.200"),
          borderRadius: "9999px",
          overflow: "hidden",
          position: "relative",
        },
        ".skill-progress-bar": {
          height: "100%",
          borderRadius: "9999px",
          position: "relative",
          transition: "width 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
            animation: "shimmer 2s infinite",
          },
        },

        // Project card components
        // ----------------------------------------------------->
        ".project-card": {
          backgroundColor: theme("colors.base.100"),
          borderRadius: "1.5rem",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          border: `1px solid ${theme("colors.base.300")}`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "4px",
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease",
          },
          "&:hover::before": {
            transform: "scaleX(1)",
          },
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
          },
        },
        ".project-image": {
          position: "relative",
          overflow: "hidden",
          height: "250px",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.1)",
          },
        },
        ".project-overlay": {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: "1",
          },
        },

        // Timeline components
        // ----------------------------------------------------->
        ".timeline-item": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "0",
            width: "20px",
            height: "20px",
            backgroundColor: theme("colors.primary.500"),
            borderRadius: "50%",
            transform: "translateY(-50%)",
            zIndex: "10",
          },
        },
      };

      addComponents(newComponents);
    },

    // Forms plugin-----------> optional
    // require('@tailwindcss/forms'),
    // ----------------------------------------------------->

    // Typography plugin-------> optional
    // require('@tailwindcss/typography'),
  ],

  // daisyUI config
  // ----------------------------------------------------->
  daisyui: {
    themes: [
      // Light Theme---------> Default
      // ----------------------------------------------------->
      {
        light: {
          primary: "#f97316",
          secondary: "#14b8a6",
          accent: "#3b82f6",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal-case",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },

      // Dark Theme
      // ----------------------------------------------------->
      {
        dark: {
          primary: "#f97316",
          secondary: "#14b8a6",
          accent: "#3b82f6",
          neutral: "#1f2937",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal-case",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },

      // Cupcake Theme
      // ----------------------------------------------------->
      {
        cupcake: {
          primary: "#65c3c8",
          secondary: "#eeaf3a",
          accent: "#ef9fbc",
          neutral: "#291334",
          "base-100": "#faf7f5",
          "base-200": "#efeae6",
          "base-300": "#e6e2df",
          info: "#3b82f6",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal-case",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },

      // Forest Theme
      // ----------------------------------------------------->
      {
        forest: {
          primary: "#1d4ed8",
          secondary: "#047857",
          accent: "#f59e0b",
          neutral: "#1c1917",
          "base-100": "#1c1917",
          "base-200": "#292524",
          "base-300": "#44403c",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal-case",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },

      // Luxury Theme
      // ----------------------------------------------------->
      {
        luxury: {
          primary: "#fbbf24",
          secondary: "#d97706",
          accent: "#f59e0b",
          neutral: "#000000",
          "base-100": "#000000",
          "base-200": "#1a1a1a",
          "base-300": "#2d2d2d",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal-case",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
};
// -----------------end tailwind config js file------------->
// ----------------------------------------------------------------------->
