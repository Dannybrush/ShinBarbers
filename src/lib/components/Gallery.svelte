<script>
	import { gallery } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="gallery" class="gallery" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Our Work</span>
		<h2 class="section-heading">Gallery</h2>
		<div class="gallery-grid">
			{#each gallery as image}
				<div class="gallery-item">
					<img src={image.src} alt={image.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.gallery {
		background: var(--color-bg);
	}
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}
	.gallery-item {
		overflow: hidden;
		border-radius: 0.5rem;
		aspect-ratio: 4 / 3;
	}
	.gallery-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}
	.gallery-item:hover img {
		transform: scale(1.06);
	}
</style>
