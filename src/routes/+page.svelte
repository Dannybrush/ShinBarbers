<script>
    // Placeholder for importing individual components
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Services from '$lib/components/Services.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Contact from '$lib/components/Contact.svelte';
  </script>
  
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #000;
      color: #fff;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
    section {
      padding: 4rem 1rem;
      text-align: center;
    }
  </style>
  
  <main>
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
  </main>
  