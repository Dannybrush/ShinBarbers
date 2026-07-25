// ============================================================================
// SITE CONTENT — edit everything here. No other file needs to change to
// update text, contact details, prices, opening hours, team, or images.
// ============================================================================

export const business = {
	name: 'Shin Barbers',
	tagline: 'Fresh Cuts, Fresh Style',

	// Shown in the hero and used for meta description / structured data.
	shortDescription:
		'A modern barber shop in Shinfield, Reading offering precision haircuts, beard trims and hot towel shaves.',

	// TODO: replace with the real business details.
	phone: '+44 7474 423200',
	email: 'info@shinbarbers.co.uk',

	address: {
		line1: '9 School Green',
		city: 'Shinfield, Reading',
		postcode: 'RG2 9EE',
		country: 'GB'
	},

	// Full site URL once a domain is live — used for SEO tags & sitemap.
	siteUrl: 'https://www.shinbarbers.co.uk',

	// TODO: replace with the shop's real Calendly (or other booking) link.
	bookingUrl: 'https://calendly.com/shinbarbers/haircut',

	// TODO: replace "#" with the shop's real profile URLs. Leave a link out
	// entirely (delete the line) to hide that icon from the footer.
	social: {
		facebook: '#',
		instagram: '#',
		whatsapp: '#',
		linkedin: '#'
	}
};

// Order matters — rendered top to bottom. "today" is not auto-detected on
// purpose, so the list stays predictable regardless of visitor timezone.
export const hours = [
	{ day: 'Monday', time: '09:00 – 18:30' },
	{ day: 'Tuesday', time: '09:00 – 18:30' },
	{ day: 'Wednesday', time: '09:00 – 18:30' },
	{ day: 'Thursday', time: '09:00 – 18:30' },
	{ day: 'Friday', time: '09:00 – 18:30' },
	{ day: 'Saturday', time: '08:30 – 17:30' },
	{ day: 'Sunday', time: '10:00 – 16:30' },
	{ day: 'Bank Holidays', time: '08:00 – 17:30' }
];

// "featured: true" highlights a card in the services grid.
export const services = [
	{
		name: 'Skin Fade',
		price: '£20',
		duration: '30 min',
		description: 'A precision fade blended seamlessly, finished with a straight-razor neckline.',
		featured: true
	},
	{
		name: 'Beard Trim',
		price: '£15',
		duration: '20 min',
		description: 'Shape and tidy with clippers and scissor work, finished with beard oil.'
	},
	{
		name: 'Hot Towel Shave',
		price: '£25',
		duration: '35 min',
		description: 'A traditional wet shave with hot towels and a straight razor.'
	},
	{
		name: 'Full Service',
		price: '£38',
		duration: '55 min',
		description: 'Haircut, beard trim and hot towel finish — the complete refresh.',
		featured: true
	}
];

// One image per placeholder team member for now — swap in real staff photos
// and bios whenever they're available.
export const team = [
	{
		name: 'Alex Morgan',
		role: 'Senior Barber',
		bio: 'Specialist in fades and beard trims.',
		image: '/placeholder-team-pic_small.jpg'
	},
	{
		name: 'Sam Carter',
		role: 'Barber',
		bio: 'Expert in modern cuts and styling.',
		image: '/placeholder-team-pic_small.jpg'
	}
];

export const gallery = [
	{ src: '/stock-1.jpg', alt: 'Inside the Shin Barbers shop' },
	{ src: '/stock-2.jpg', alt: 'A finished fade haircut' },
	{ src: '/stock-3.jpg', alt: 'Barber tools laid out on the counter' }
];

// Placeholder quotes — replace with real customer reviews (e.g. copied from
// Google Business) once available. Keep them short.
export const testimonials = [
	{
		quote: 'Best fade I’ve had in Reading. Booked online in seconds and was seen right on time.',
		author: 'Local customer'
	},
	{
		quote: 'Really friendly team and a great atmosphere. My go-to barber now.',
		author: 'Local customer'
	},
	{
		quote: 'Hot towel shave was excellent — proper old-school service.',
		author: 'Local customer'
	}
];
