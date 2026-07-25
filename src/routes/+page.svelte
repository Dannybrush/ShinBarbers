<script>
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import OpeningTimes from '$lib/components/OpeningTimes.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Team from '$lib/components/Team.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Booking from '$lib/components/Booking.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Sep from '$lib/components/Sep.svelte';
	import F3 from '$lib/components/footer3.svelte';
	import { business, hours } from '$lib/data/site.js';

	const title = `${business.name} | Barber Shop in ${business.address.city}`;
	const description = business.shortDescription;

	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const openingHoursSpecification = hours
		.filter((slot) => dayNames.includes(slot.day))
		.map((slot) => {
			const [opens, closes] = slot.time.split('–').map((t) => t.trim());
			return {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: `https://schema.org/${slot.day}`,
				opens,
				closes
			};
		});

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'HairSalon',
		name: business.name,
		description: business.shortDescription,
		telephone: business.phone,
		email: business.email,
		url: business.siteUrl,
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.address.line1,
			addressLocality: business.address.city,
			postalCode: business.address.postcode,
			addressCountry: business.address.country
		},
		openingHoursSpecification
	};

	// Tag text is split across concatenation so the literal substring never
	// appears whole — Svelte's own parser scans for it even inside strings.
	const jsonLdScript =
		'<' + 'script type="application/ld+json">' + JSON.stringify(structuredData) + '<' + '/script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={business.siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="business.business" />
	<meta property="og:url" content={business.siteUrl} />
	<meta property="og:image" content={`${business.siteUrl}/hero-image.jpg`} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- built entirely from our own site.js config, not user input -->
	{@html jsonLdScript}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<Nav />

<main id="main">
	<Hero />
	<Sep />

	<About />
	<Sep />

	<Services />
	<Sep />

	<OpeningTimes />
	<Sep />

	<Gallery />
	<Sep />

	<Team />
	<Sep />

	<Testimonials />
	<Sep />

	<Booking />
	<Sep />

	<Contact />
	<Sep />

	<F3 />
</main>
