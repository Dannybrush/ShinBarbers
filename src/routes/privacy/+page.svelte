<script>
	import Nav from '$lib/components/Nav.svelte';
	import F3 from '$lib/components/footer3.svelte';
	import { business } from '$lib/data/site.js';

	const title = `Privacy Policy | ${business.name}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`Privacy policy for ${business.name}.`} />
	<meta name="robots" content="noindex" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<Nav />

<main id="main">
	<section class="policy">
		<div class="section-inner policy-inner">
			<h1>Privacy Policy</h1>
			<p class="updated">
				Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
			</p>

			<h2>Who we are</h2>
			<p>
				{business.name}, {business.address.line1}, {business.address.city}, {business.address
					.postcode}. Contact us at <a href={`mailto:${business.email}`}>{business.email}</a> or
				<a href={`tel:${business.phone.replace(/\s+/g, '')}`}>{business.phone}</a>.
			</p>

			<h2>What we collect</h2>
			<p>
				If you contact us by phone, email, or through our online booking system, we collect the
				details you provide (such as your name, email address, and phone number) in order to respond
				to you and manage your appointment.
			</p>

			<h2>How we use it</h2>
			<p>
				We use your information only to provide the service you've requested — for example,
				confirming or managing a booking. We do not sell or share your information with third
				parties for marketing purposes.
			</p>

			<h2>Booking system</h2>
			<p>
				Appointments are booked through Calendly, a third-party scheduling service. When you book an
				appointment, the information you enter is processed by Calendly in accordance with their own
				privacy policy.
			</p>

			<h2>Your rights</h2>
			<p>
				You can ask us at any time what information we hold about you, or ask us to correct or
				delete it, by contacting us using the details above.
			</p>

			<p class="note">
				This is a template policy — replace this page with legal advice specific to your business
				before relying on it.
			</p>
		</div>
	</section>
</main>

<F3 />

<style>
	.policy {
		padding-top: 3rem;
	}
	.policy-inner {
		max-width: 720px;
		text-align: left;
	}
	h1 {
		font-size: clamp(2rem, 1.6rem + 1.5vw, 3rem);
		margin-bottom: 0.25rem;
	}
	.updated {
		color: var(--color-text-muted);
		margin-top: 0;
	}
	h2 {
		margin-top: 2rem;
	}
	p {
		color: var(--color-text-muted);
		line-height: 1.7;
	}
	a {
		color: var(--color-accent);
	}
	.note {
		margin-top: 2.5rem;
		padding: 1rem;
		border: 1px dashed var(--color-border);
		border-radius: 0.5rem;
		font-size: 0.9rem;
	}
</style>
