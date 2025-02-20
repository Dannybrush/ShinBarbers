<!-- newseletter footer -->

<footer class="footer newsletter">
    <div class="footer-content">
      <div class="footer-section info">
        <h3>Shin Barbers</h3>
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
      <div class="footer-section subscribe">
        <h3>Newsletter</h3>
        <form on:submit|preventDefault={subscribe}>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {new Date().getFullYear()} Shin Barbers. All rights reserved.</p>
    </div>
  </footer>
  
  <script>
    function subscribe() {
      // Handle subscription logic here (e.g., API call)
      alert('Thank you for subscribing!');
    }
  </script>
  
  <style>
    .footer.newsletter {
      background: #333;
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
      margin: 0.5rem 0;
      display: block;
    }
    .footer-section.subscribe form {
      display: flex;
      flex-direction: column;
    }
    .footer-section.subscribe input {
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }
    .footer-section.subscribe button {
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      background: #0077B6;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .footer-section.subscribe button:hover {
      background: #005f87;
    }
    .footer-bottom {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #aaa;
    }
  </style>
  