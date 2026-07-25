<script>
	import { business } from '$lib/data/site.js';
</script>

<section id="top" class="hero">
	<span class="eyebrow">Shinfield, Reading</span>
	<h1>{business.name}</h1>
	<p>{business.tagline}</p>
	<div class="cta-row">
		<button
			class="cta-button"
			onclick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
		>
			Book an Appointment
		</button>
		<button
			class="cta-button secondary"
			onclick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
		>
			View Services
		</button>
	</div>
</section>

<style>
	.hero {
		height: 100vh;
		min-height: 560px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background:
			linear-gradient(to bottom, rgba(11, 11, 12, 0.55), rgba(11, 11, 12, 0.9)),
			url('/hero-image.jpg') no-repeat center center;
		background-size: cover;
		text-align: center;
		padding: 1.5rem;
	}
	.eyebrow {
		color: var(--color-accent);
	}
	h1 {
		font-size: clamp(2.5rem, 1.8rem + 3vw, 4.5rem);
		margin: 0;
		color: var(--color-text);
	}
	p {
		font-size: 1.25rem;
		color: var(--color-text-muted);
		max-width: 40ch;
		margin: 1rem 0 0;
	}
	.cta-row {
		display: flex;
		gap: 1rem;
		margin-top: 2.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	.cta-button {
		padding: 1rem 2rem;
		background-color: var(--color-accent);
		color: var(--color-accent-contrast);
		font-size: 1.05rem;
		font-weight: 600;
		border: none;
		border-radius: 999px;
		cursor: pointer;
		transition: background var(--transition-base);
	}
	.cta-button:hover {
		background-color: var(--color-accent-hover);
	}
	.cta-button.secondary {
		background: transparent;
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}
	.cta-button.secondary:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}
</style>
