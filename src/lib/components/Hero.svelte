<script>
    export let title = "Welcome to Shin Barbers";
    export let subtitle = "Fresh Cuts, Fresh Style";
  </script>
  
  <style>
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/path/to/hero-image.jpg') no-repeat center center;
      background-size: cover;
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      margin: 0;
      color: #fff;
    }
    p {
      font-size: 1.5rem;
      color: #ccc;
    }
  </style>
  
  <section class="hero">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
  