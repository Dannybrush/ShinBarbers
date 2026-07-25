<script>
	import { business } from '$lib/data/site.js';

	/** @type {Record<string, string>} */
	const social = business.social;

	const socialLinks = [
		{ key: 'facebook', icon: '/icons/FaceBook.png', label: 'Facebook' },
		{ key: 'instagram', icon: '/icons/Insta.png', label: 'Instagram' },
		{ key: 'whatsapp', icon: '/icons/whatsapps.png', label: 'WhatsApp' },
		{ key: 'linkedin', icon: '/icons/LinkedIn.png', label: 'LinkedIn' }
	]
		.filter((item) => social[item.key])
		.map((item) => ({ ...item, url: social[item.key] }));
</script>

<footer class="footer grid">
	<div class="section-inner footer-content">
		<div class="footer-section brand">
			<h3>{business.name}</h3>
			<p>{business.address.line1}, {business.address.city}, {business.address.postcode}</p>
			<p>Phone: <a href={`tel:${business.phone.replace(/\s+/g, '')}`}>{business.phone}</a></p>
			<p>Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>
		</div>
		<div class="footer-section links">
			<h3>Quick Links</h3>
			<a href="#services">Services</a>
			<a href="#team">Team</a>
			<a href="#contact">Contact</a>
			<a href="/privacy">Privacy Policy</a>
		</div>
		{#if socialLinks.length}
			<div class="footer-section social">
				<h3>Follow Us</h3>
				{#each socialLinks as item}
					<a href={item.url}><img src={item.icon} alt={item.label} /></a>
				{/each}
			</div>
		{/if}
	</div>
	<div class="footer-bottom">
		<p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer.grid {
		background: var(--color-bg-raised);
		color: var(--color-text);
		padding: 3rem 1.5rem 1.5rem;
		font-size: 0.9rem;
		border-top: 1px solid var(--color-border);
	}
	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 2rem;
	}
	.footer-section h3 {
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}
	.footer-section p {
		color: var(--color-text-muted);
		margin: 0.35rem 0;
	}
	.footer-section a {
		color: var(--color-text-muted);
		text-decoration: none;
		display: block;
		margin: 0.5rem 0;
	}
	.footer-section a:hover {
		color: var(--color-accent);
	}
	.footer-section.social a {
		display: inline-block;
		margin-right: 0.5rem;
		width: 24px;
		height: 24px;
	}
	.footer-section.social img {
		width: 100%;
		height: auto;
		background-color: #fff;
		border-radius: 4px;
	}
	.footer-bottom {
		text-align: center;
		margin-top: 1.5rem;
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}
</style>
