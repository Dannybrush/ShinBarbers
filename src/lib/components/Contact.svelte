<script>
	import { business } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';

	const fullAddress = `${business.address.line1}, ${business.address.city}, ${business.address.postcode}`;
	const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
</script>

<section id="contact" class="contact" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Get In Touch</span>
		<h2 class="section-heading">Contact Us</h2>
		<div class="contact-grid">
			<div class="details">
				<div class="detail-item">
					<span class="label">Phone</span>
					<a href={`tel:${business.phone.replace(/\s+/g, '')}`}>{business.phone}</a>
				</div>
				<div class="detail-item">
					<span class="label">Email</span>
					<a href={`mailto:${business.email}`}>{business.email}</a>
				</div>
				<div class="detail-item">
					<span class="label">Address</span>
					<span>{business.address.line1}, {business.address.city}, {business.address.postcode}</span
					>
				</div>
			</div>
			<div class="map-wrap">
				<iframe
					title="Map to {business.name}"
					src={mapSrc}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background: var(--color-bg);
	}
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		text-align: left;
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.detail-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.detail-item .label {
		color: var(--color-text-muted);
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	.detail-item a,
	.detail-item span {
		color: var(--color-text);
		font-size: 1.1rem;
		text-decoration: none;
	}
	.detail-item a:hover {
		color: var(--color-accent);
	}
	.map-wrap {
		border-radius: 0.75rem;
		overflow: hidden;
		border: 1px solid var(--color-border);
		min-height: 280px;
	}
	.map-wrap iframe {
		width: 100%;
		height: 100%;
		min-height: 280px;
		border: 0;
		display: block;
	}

	@media (max-width: 800px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
