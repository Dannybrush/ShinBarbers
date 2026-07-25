<script>
	import { page } from '$app/state';
	import { business } from '$lib/data/site.js';
</script>

<svelte:head>
	<title>{page.status} | {business.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="error-page">
	<p class="status">{page.status}</p>
	<h1>{page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
	<p class="message">
		{page.status === 404
			? "The page you're looking for doesn't exist."
			: (page.error?.message ?? 'An unexpected error occurred.')}
	</p>
	<a class="home-link" href="/">Back to home</a>
</main>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		background: var(--color-bg);
		color: var(--color-text);
	}
	.status {
		font-family: var(--font-display);
		font-size: 5rem;
		color: var(--color-accent);
		margin: 0;
		line-height: 1;
	}
	h1 {
		margin: 0.5rem 0;
	}
	.message {
		color: var(--color-text-muted);
		max-width: 40ch;
	}
	.home-link {
		margin-top: 1.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--color-accent);
		color: var(--color-accent-contrast);
		border-radius: 999px;
		text-decoration: none;
		font-weight: 600;
	}
</style>
