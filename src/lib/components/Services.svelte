<script>
	import { services } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="services" class="services" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">What We Offer</span>
		<h2 class="section-heading">Our Services</h2>
		<p class="section-lede">
			Every service is finished the same way — with care and attention to the details that matter.
		</p>
		<div class="grid">
			{#each services as service}
				<div class="card" class:featured={service.featured}>
					<div class="card-head">
						<h3>{service.name}</h3>
						<span class="price">{service.price}</span>
					</div>
					<span class="duration">{service.duration}</span>
					<p class="description">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.services {
		background: var(--color-bg);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
		text-align: left;
	}
	.card {
		background: var(--color-bg-raised);
		border: 1px solid var(--color-border);
		border-radius: 0.75rem;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: border-color var(--transition-base);
	}
	.card.featured {
		border-color: var(--color-accent);
	}
	.card-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
	}
	.card-head h3 {
		margin: 0;
		font-size: 1.3rem;
		font-family: var(--font-display);
	}
	.price {
		color: var(--color-accent);
		font-weight: 600;
		font-size: 1.2rem;
		white-space: nowrap;
	}
	.duration {
		color: var(--color-text-muted);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.description {
		color: var(--color-text-muted);
		margin: 0;
		line-height: 1.6;
	}
</style>
