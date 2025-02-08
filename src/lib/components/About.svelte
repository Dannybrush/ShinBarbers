<!-- About.svelte --> 
<script>
  export let description = "We are a traditional barbershop offering quality haircuts and grooming services in a relaxed and friendly atmosphere.";
</script>

<style>
  .about {
    padding: 4rem 1rem;
    background: #111;
    color: #eee;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
</style>

<section class="about">
  <h2>About Us</h2>
  <p>{description}</p>
</section>