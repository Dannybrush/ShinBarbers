<!--   Gallery.svelte -->  
<script>
  export let images = [
    '/logo.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg'
  ];
</script>

<style>
  .gallery {
    padding: 4rem 4rem;
    background: #111;
    color: #fff;
    text-align: right;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  .gallery-image img {
    width: 100%;
    border-radius: 0.5rem;
  }
</style>

<section class="gallery">
  <h2>Gallery</h2>
  <div class="gallery-images">
    {#each images as image}
      <div class="gallery-image">
        <img src={image} alt="Gallery Image">
      </div>
    {/each}
  </div>
</section>
