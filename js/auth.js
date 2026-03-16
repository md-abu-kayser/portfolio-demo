class AuthSystem {
  constructor() {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.init();
  }

  init() {
    this.bindAuthEvents();
    this.checkExistingAuth();
  }

  bindAuthEvents() {
    // Login form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => this.handleLogin(e));
    }

    // Signup form
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => this.handleSignup(e));
    }

    // Social auth buttons
    document.querySelectorAll(".social-auth-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.handleSocialAuth(e));
    });

    // Form switching
    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");

    if (switchToSignup) {
      switchToSignup.addEventListener("click", (e) =>
        this.switchForm("signup")
      );
    }
    if (switchToLogin) {
      switchToLogin.addEventListener("click", (e) => this.switchForm("login"));
    }
  }

  async handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);

    if (!this.validateLoginForm(credentials)) {
      this.showAuthMessage("Please check your email and password.", "error");
      return;
    }

    this.setAuthLoading(true);

    try {
      await this.authenticateUser(credentials);
      this.isAuthenticated = true;
      this.currentUser = credentials.email;

      this.showAuthMessage("Login successful! Redirecting...", "success");
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      this.showAuthMessage("Invalid credentials. Please try again.", "error");
    } finally {
      this.setAuthLoading(false);
    }
  }

  async handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    if (!this.validateSignupForm(userData)) {
      this.showAuthMessage("Please fill all fields correctly.", "error");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      this.showAuthMessage("Passwords do not match.", "error");
      return;
    }

    this.setAuthLoading(true);

    try {
      await this.registerUser(userData);
      this.showAuthMessage(
        "Account created successfully! Please login.",
        "success"
      );
      this.switchForm("login");
    } catch (error) {
      this.showAuthMessage("Registration failed. Please try again.", "error");
    } finally {
      this.setAuthLoading(false);
    }
  }

  validateLoginForm(credentials) {
    const { email, password } = credentials;
    return email && password && password.length >= 6;
  }

  validateSignupForm(userData) {
    const { name, email, password, confirmPassword } = userData;
    return name && email && password && confirmPassword && password.length >= 8;
  }

  async authenticateUser(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API call
        Math.random() > 0.2
          ? resolve()
          : reject(new Error("Authentication failed"));
      }, 1500);
    });
  }

  async registerUser(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API Call
        Math.random() > 0.1
          ? resolve()
          : reject(new Error("Registration failed"));
      }, 2000);
    });
  }

  setAuthLoading(loading) {
    const forms = document.querySelectorAll("#login-form, #signup-form");
    forms.forEach((form) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        if (loading) {
          submitBtn.disabled = true;
          submitBtn.classList.add("loading");
          submitBtn.innerHTML = "<span>Processing...</span>";
        } else {
          submitBtn.disabled = false;
          submitBtn.classList.remove("loading");
          if (form.id === "login-form") {
            submitBtn.innerHTML =
              '<span>Login</span><i class="fas fa-sign-in-alt ml-2"></i>';
          } else {
            submitBtn.innerHTML =
              '<span>Sign Up</span><i class="fas fa-user-plus ml-2"></i>';
          }
        }
      }
    });
  }

  // Remove Existing Messages
  showAuthMessage(message, type) {
    const existingMsg = document.querySelector(".auth-message");
    if (existingMsg) {
      existingMsg.remove();
    }

    const messageEl = document.createElement("div");
    messageEl.className = `auth-message auth-message-${type}`;
    messageEl.innerHTML = `
            <i class="fas fa-${this.getAuthMessageIcon(type)}"></i>
            <span>${message}</span>
        `;

    const authContainer = document.querySelector(".auth-container");
    if (authContainer) {
      authContainer.insertBefore(messageEl, authContainer.firstChild);
    }

    // Auto remove After 5 Seconds
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.remove();
      }
    }, 5000);
  }

  getAuthMessageIcon(type) {
    return type === "success" ? "check-circle" : "exclamation-circle";
  }

  switchForm(formType) {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const switchText = document.querySelector(".auth-switch-text");

    if (formType === "signup") {
      loginForm?.classList.add("hidden");
      signupForm?.classList.remove("hidden");
      if (switchText) {
        switchText.innerHTML =
          'Already have an account? <a href="#" id="switch-to-login">Login here</a>';
      }
    } else {
      signupForm?.classList.add("hidden");
      loginForm?.classList.remove("hidden");
      if (switchText) {
        switchText.innerHTML =
          'Don\'t have an account? <a href="#" id="switch-to-signup">Sign up here</a>';
      }
    }

    this.bindAuthEvents();
  }

  async handleSocialAuth(e) {
    e.preventDefault();
    const provider = e.currentTarget.dataset.provider;

    this.setAuthLoading(true);

    try {
      const authUrl = this.getSocialAuthUrl(provider);
      this.openSocialPopup(authUrl, provider);
    } catch (error) {
      this.showAuthMessage(`Failed to connect with ${provider}.`, "error");
    } finally {
      this.setAuthLoading(false);
    }
  }

  getSocialAuthUrl(provider) {
    const urls = {
      google: `https://accounts.google.com/o/oauth2/auth?client_id=${this.getClientId(
        provider
      )}&redirect_uri=${
        window.location.origin
      }/auth/callback&response_type=code&scope=email profile`,
      github: `https://github.com/login/oauth/authorize?client_id=${this.getClientId(
        provider
      )}&redirect_uri=${window.location.origin}/auth/callback&scope=user:email`,
      linkedin: `https://www.linkedin.com/oauth/v2/authorization?client_id=${this.getClientId(
        provider
      )}&redirect_uri=${
        window.location.origin
      }/auth/callback&response_type=code&scope=r_liteprofile r_emailaddress`,
      facebook: `https://www.facebook.com/v12.0/dialog/oauth?client_id=${this.getClientId(
        provider
      )}&redirect_uri=${window.location.origin}/auth/callback&scope=email`,
      twitter: `https://twitter.com/i/oauth2/authorize?client_id=${this.getClientId(
        provider
      )}&redirect_uri=${
        window.location.origin
      }/auth/callback&response_type=code&scope=users.read tweet.read`,
    };

    return urls[provider];
  }

  getClientId(provider) {
    const clientIds = {
      google: "YOUR_GOOGLE_CLIENT_ID",
      github: "YOUR_GITHUB_CLIENT_ID",
      linkedin: "YOUR_LINKEDIN_CLIENT_ID",
      facebook: "YOUR_FACEBOOK_CLIENT_ID",
      twitter: "YOUR_TWITTER_CLIENT_ID",
    };

    return clientIds[provider];
  }

  openSocialPopup(url, provider) {
    const width = 600;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const popup = window.open(
      url,
      `${provider}Auth`,
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (!popup) {
      this.showAuthMessage(
        "Popup blocked! Please allow popups for social login.",
        "error"
      );
      return;
    }

    // Popup Closure
    const checkInterval = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkInterval);
        this.handleSocialAuthCallback(provider);
      }
    }, 1000);
  }

  handleSocialAuthCallback(provider) {
    this.showAuthMessage(`Successfully connected with ${provider}!`, "success");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  }

  checkExistingAuth() {
    const token = localStorage.getItem("auth_token");
    if (token) {
      this.isAuthenticated = true;
      this.currentUser = localStorage.getItem("user_email");
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_email");
    window.location.href = "/auth/login.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.authSystem = new AuthSystem();
});
// end
