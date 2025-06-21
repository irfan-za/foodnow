<template>
  <footer class="container">
    <div class="footer__wrapper">
      <div class="footer__section">
        <img src="@/assets/images/logo-alt.svg" alt="Foodnow Logo" class="footer__logo" />
        <div>
          <h3>Find Us :</h3>
          <div class="footer__social-links">
            <a
              href="https://www.facebook.com/timedoorindonesia"
              target="_blank"
              class="footer__social-icon"
            >
              <img src="@/assets/icons/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/timedoorindonesia/"
              target="_blank"
              class="footer__social-icon"
            >
              <img src="@/assets/icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com/@timedoorindonesia"
              target="_blank"
              class="footer__social-icon"
            >
              <img src="@/assets/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer__section">
        <h3>Navigation</h3>
        <div class="footer__nav-grid">
          <a href="/" class="footer__nav-link">Home</a>
          <a href="/contact" class="footer__nav-link">Contact</a>
          <a href="/order" class="footer__nav-link">Order</a>
          <a href="/login" class="footer__nav-link">Login</a>
          <a href="/about" class="footer__nav-link">About</a>
          <a href="/register" class="footer__nav-link">Register</a>
          <a href="/blog" class="footer__nav-link">Blog</a>
        </div>
      </div>

      <div class="footer__section">
        <h3>Contact</h3>
        <a href="mailto:Food.now@mail.com" class="footer__contact-item">
          <img src="@/assets/icons/mail.svg" alt="Email" />
          Food.now@mail.com
        </a>
        <div class="footer__contact-item">
          <img src="@/assets/icons/phone.svg" alt="Phone" />
          +6284477102943
        </div>
        <a href="https://wa.me/628184938494" target="_blank" class="footer__contact-item">
          <img src="@/assets/icons/whatsapp.svg" alt="WhatsApp" />
          +628184938494
        </a>
      </div>

      <div class="footer__section">
        <h3>Location</h3>
        <div class="footer__location-header">
          <img src="@/assets/icons/location.svg" alt="Location" />
          <h4>Kerobokan</h4>
        </div>
        <a href="https://g.page/timedoor?share" target="_blank" class="footer__location-address">
          Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
          Badung, Bali 80361
        </a>
      </div>
    </div>
    <p class="footer__copyright">
      Copyright © 2025. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy
      <br />
      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
    </p>
  </footer>
</template>

<style src="@/styles/layout/footer.scss" scoped></style>
