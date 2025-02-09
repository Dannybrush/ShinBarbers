<!-- About.svelte --> 
<script>
  export let description =`Shin Barbers is a modern and stylish barber shop located in Shinfield village. 

  Its sleek interior design features creates a welcoming atmosphere for clients. 
  
  The shop offers a range of grooming services tailored to meet the needs of its diverse clientele, including precision haircuts, beard trims, hot towel shaves, and full service. 
  
  Shin Barbers is set apart by its team of highly skilled and personable barbers who are passionate about their profession and dedicated to providing top-notch service. 
  
  With attention to detail and a commitment to customer satisfaction, Shin Barbers ensures that every client leaves feeling confident and refreshed, making it a go-to destination`;
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
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    white-space: pre-line;
    text-align: center;
  }
</style>

<section class="about">
  <h2>About Us</h2>
  <p>{description}</p>
</section>