<!-- informative grid -->

<footer class="footer grid">
    <div class="footer-content">
      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p>9 School Grn, Shinfield, Reading RG2 9EE</p>
        <p>Phone: +44 (0) 7474 423200</p>
        <p>Email: <a href="mailto:info@barbershop.com">info@barbershop.com</a></p>
      </div>
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <a href="/services">Services</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </div>
      <div class="footer-section social">
        <h3>Follow Us</h3>
        <a href="#"><img src="/icons/FaceBook.png" alt="Facebook" /></a>
        <a href="#"><img src="/icons/Insta.png" alt="Instagram" /></a>
        <a href="#"><img src="/icons/whatsapps.png" alt="Twitter" /></a>
        <a href="#"><img src="/icons/LinkedIn.png" alt="Facebook" /></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {new Date().getFullYear()} Shin Barbers. All rights reserved.</p>
    </div>
  </footer>
  
  <style>
    .footer.grid {
      background: #000;
      color: #fff;
      padding: 2rem;
      font-size: 0.9rem;
    }
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      border-bottom: 1px solid #555;
      padding-bottom: 1rem;
    }
    .footer-section h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .footer-section a {
      color: #fff;
      text-decoration: none;
      display: block;
      margin: 0.5rem 0;
    }
    .footer-section a:hover {
      text-decoration: underline;
    }
    .footer-section.social a {
      display: inline-block;
      margin-right: 0.5rem;
      width: 24px;
      height: 24px;
    }
    .footer-section.social img {
      width: 100%;
      height: auto;
      background-color: #fff;
    }
    .footer-bottom {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #aaa;
    }
  </style>
  