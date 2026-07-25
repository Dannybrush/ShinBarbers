<script>
	import { business } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="about" class="about" use:reveal>
	<div class="section-inner about-grid">
		<img class="about-image" src="/stock-2.jpg" alt="Inside {business.name}" loading="lazy" />
		<div>
			<span class="eyebrow">About Us</span>
			<h2 class="section-heading">A modern barber shop in the heart of Shinfield</h2>
			<p>{business.shortDescription}</p>
			<p>
				Our barbers combine precision technique with genuine attention to detail — every client
				leaves confident, refreshed, and looking sharp.
			</p>
		</div>
	</div>
</section>

<style>
	.about {
		background: var(--color-bg-raised);
	}
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		text-align: left;
	}
	.about-image {
		width: 100%;
		height: 100%;
		min-height: 320px;
		border-radius: 0.5rem;
		object-fit: cover;
	}
	p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	@media (max-width: 800px) {
		.about-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
	}
</style>
