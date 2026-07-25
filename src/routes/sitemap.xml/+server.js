import { business } from '$lib/data/site.js';

const pages = ['/', '/privacy'];

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((path) => `  <url><loc>${business.siteUrl}${path}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
