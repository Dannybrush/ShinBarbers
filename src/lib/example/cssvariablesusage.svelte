<script>
    // Your component logic
  </script>
  
  <section class="hero">
    <h1>Welcome to Shin Barbers</h1>
    <p>Your premium grooming experience starts here.</p>
    <button class="cta-button">Book an Appointment</button>
  </section>
  
  <style>
    .hero {
      /* Using variables defined in your global CSS */
      background: linear-gradient(to bottom, var(--secondary-color), var(--primary-color));
      padding: var(--padding-large) var(--spacing-base);
      color: var(--text-color);
      font-family: var(--font-family);
      text-align: center;
    }
    
    .cta-button {
      padding: calc(var(--spacing-base) * 1.5) calc(var(--spacing-base) * 2);
      background-color: var(--primary-color);
      color: var(--text-color);
      border: none;
      border-radius: 8px;
      transition: background 0.3s ease;
    }
    
    .cta-button:hover {
      background-color: var(--secondary-color);
    }
  </style>
  