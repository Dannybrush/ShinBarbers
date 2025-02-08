<!--  Services.svelte --> 
<script>
  export let services = [
    { name: "Haircut", price: "$20" },
    { name: "Beard Trim", price: "$15" },
    { name: "Shave", price: "$25" }
  ];
</script>

<style>
  .services {
    padding: 4rem 1rem;
    background: #000;
    color: #fff;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .service-item {
    margin-bottom: 1rem;
  }
</style>

<section class="services">
  <h2>Our Services</h2>
  {#each services as service}
    <div class="service-item">
      <strong>{service.name}</strong>: {service.price}
    </div>
  {/each}
</section>