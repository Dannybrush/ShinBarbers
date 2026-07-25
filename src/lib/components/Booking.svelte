<!--
  Real online booking, via Calendly's free embeddable widget (no backend needed).
  Set business.bookingUrl in src/lib/data/site.js to the shop's real Calendly
  link once https://calendly.com is set up for them (the free plan is enough).
-->
<script>
	import { business } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
	<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
</svelte:head>

<section id="booking" class="booking" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Book Online</span>
		<h2 class="section-heading">Book an Appointment</h2>
		<p class="section-lede">Pick a service and time that works for you — confirmed instantly.</p>
		<div
			class="calendly-inline-widget"
			data-url={business.bookingUrl}
			style="min-width:320px;height:700px;"
		></div>
	</div>
</section>

<style>
	.booking {
		background: var(--color-bg-raised);
	}
	.calendly-inline-widget {
		max-width: 900px;
		margin: 0 auto;
		background: var(--color-bg-raised-2);
		border-radius: 0.75rem;
		border: 1px solid var(--color-border);
	}
</style>
