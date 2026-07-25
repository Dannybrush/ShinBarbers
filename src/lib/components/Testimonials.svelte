<script>
	import { testimonials } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="testimonials" class="testimonials" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Reviews</span>
		<h2 class="section-heading">What Clients Say</h2>
		<div class="grid">
			{#each testimonials as t}
				<div class="card">
					<span class="stars" aria-hidden="true">★★★★★</span>
					<blockquote>"{t.quote}"</blockquote>
					<cite>— {t.author}</cite>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonials {
		background: var(--color-bg);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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
		gap: 1rem;
	}
	.stars {
		color: var(--color-accent);
		letter-spacing: 0.15em;
	}
	blockquote {
		margin: 0;
		color: var(--color-text);
		font-size: 1.05rem;
		line-height: 1.6;
	}
	cite {
		display: block;
		font-style: normal;
		color: var(--color-text-muted);
		font-size: 0.9rem;
	}
</style>
