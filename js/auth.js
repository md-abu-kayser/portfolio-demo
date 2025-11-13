// Authentication System with Social Login UI
class AuthSystem {
  constructor() {
    this.currentUser = null;
    this.isAuthenticated = false;
    this.init();
  }

  init() {
    this.checkExistingAuth();
    this.setupAuthListeners();
    this.updateAuthUI();
  }

  checkExistingAuth() {
    // Check if user is already logged in (from localStorage)
    try {
      const userData = localStorage.getItem("portfolio-user");
      if (userData) {
        this.currentUser = JSON.parse(userData);
        this.isAuthenticated = true;
      }
    } catch (e) {
      console.warn("Could not retrieve user data:", e);
      this.logout();
    }
  }

  setupAuthListeners() {
    // Login form handler
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => this.handleLogin(e));
    }

    // Signup form handler
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => this.handleSignup(e));
    }

    // Social login buttons
    document.querySelectorAll(".social-login-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.handleSocialLogin(e));
    });

    // Logout button
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => this.logout());
    }
  }

  async handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await this.performLogin(email, password);
      this.showNotification("Login successful!", "success");

      // Redirect or update UI
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      this.showNotification(error.message, "error");
    }
  }

  async handleSignup(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Validation
    if (password !== confirmPassword) {
      this.showNotification("Passwords do not match", "error");
      return;
    }

    if (password.length < 6) {
      this.showNotification("Password must be at least 6 characters", "error");
      return;
    }

    try {
      await this.performSignup(name, email, password);
      this.showNotification("Account created successfully!", "success");

      // Redirect to login or dashboard
      setTimeout(() => {
        window.location.href = "/auth/login.html";
      }, 1000);
    } catch (error) {
      this.showNotification(error.message, "error");
    }
  }

  async handleSocialLogin(e) {
    const provider = e.currentTarget.dataset.provider;
    const button = e.currentTarget;
    const originalText = button.innerHTML;

    // Show loading state
    button.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Connecting...';
    button.disabled = true;

    try {
      // Simulate social login process
      await this.performSocialLogin(provider);
      this.showNotification(
        `Logged in with ${this.formatProviderName(provider)}`,
        "success"
      );

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      this.showNotification(
        `Failed to login with ${this.formatProviderName(provider)}`,
        "error"
      );
      button.innerHTML = originalText;
      button.disabled = false;
    }
  }

  async performLogin(email, password) {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation - in real app, this would be an API call
        if (email === "demo@example.com" && password === "password") {
          const user = {
            id: 1,
            name: "Demo User",
            email: email,
            avatar: "/images/avatar.png",
          };

          this.currentUser = user;
          this.isAuthenticated = true;
          this.storeUserData(user);
          resolve(user);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1500);
    });
  }

  async performSignup(name, email, password) {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password) {
          const user = {
            id: Date.now(),
            name: name,
            email: email,
            avatar: "/images/avatar.png",
          };

          resolve(user);
        } else {
          reject(new Error("Please fill all fields"));
        }
      }, 1500);
    });
  }

  async performSocialLogin(provider) {
    // Simulate social login process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock successful social login
        const user = {
          id: Date.now(),
          name: `${this.formatProviderName(provider)} User`,
          email: `user@${provider}.com`,
          avatar: `/images/${provider}-avatar.png`,
          provider: provider,
        };

        this.currentUser = user;
        this.isAuthenticated = true;
        this.storeUserData(user);
        resolve(user);
      }, 2000);
    });
  }

  logout() {
    this.currentUser = null;
    this.isAuthenticated = false;
    this.clearUserData();
    this.updateAuthUI();
    this.showNotification("Logged out successfully", "success");

    // Redirect to home page
    if (window.location.pathname.includes("/auth/")) {
      window.location.href = "/";
    }
  }

  storeUserData(user) {
    try {
      localStorage.setItem("portfolio-user", JSON.stringify(user));
      localStorage.setItem("portfolio-token", "mock-jwt-token");
    } catch (e) {
      console.warn("Could not store user data:", e);
    }
  }

  clearUserData() {
    try {
      localStorage.removeItem("portfolio-user");
      localStorage.removeItem("portfolio-token");
    } catch (e) {
      console.warn("Could not clear user data:", e);
    }
  }

  updateAuthUI() {
    const authElements = document.querySelectorAll("[data-auth]");

    authElements.forEach((element) => {
      const authState = element.dataset.auth;

      if (authState === "authenticated" && this.isAuthenticated) {
        element.classList.remove("hidden");
      } else if (authState === "unauthenticated" && !this.isAuthenticated) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });

    // Update user info in navbar
    const userAvatar = document.getElementById("user-avatar");
    const userName = document.getElementById("user-name");
    const userEmail = document.getElementById("user-email");

    if (this.isAuthenticated && this.currentUser) {
      if (userAvatar) userAvatar.src = this.currentUser.avatar;
      if (userName) userName.textContent = this.currentUser.name;
      if (userEmail) userEmail.textContent = this.currentUser.email;
    }
  }

  formatProviderName(provider) {
    const names = {
      google: "Google",
      facebook: "Facebook",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      x: "X (Twitter)",
    };
    return names[provider] || provider;
  }

  showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${
      type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`;
    notification.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-${
          type === "success" ? "check" : "exclamation"
        }-circle mr-2"></i>
        <span>${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.add("opacity-100", "translate-x-0");
    }, 10);

    // Remove after delay
    setTimeout(() => {
      notification.classList.remove("opacity-100", "translate-x-0");
      notification.classList.add("opacity-0", "translate-x-full");
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  // Public method to check auth status
  getAuthStatus() {
    return {
      isAuthenticated: this.isAuthenticated,
      user: this.currentUser,
    };
  }

  // Public method to get user data
  getUser() {
    return this.currentUser;
  }
}

// Initialize auth system when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.authSystem = new AuthSystem();
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = AuthSystem;
}
