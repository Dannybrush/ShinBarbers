<!--  Contact.svelte  --> 
<script>
  export let phone = "(123) 456-7890";
  export let email = "info@barbershop.com";
  export let address = "123 Barber Street, City, Country";
</script>

<style>
  .contact {
    padding: 4rem 1rem;
    background: #000;
    color: #fff;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .contact-info {
    font-size: 1.2rem;
  }
</style>

<section class="contact">
  <h2>Contact Us</h2>
  <div class="contact-info">
    <p>Phone: {phone}</p>
    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    <p>Address: {address}</p>
  </div>
</section>
