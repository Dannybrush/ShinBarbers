<script>
	import { business } from '$lib/data/site.js';

	let open = $state(false);

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#services', label: 'Services' },
		{ href: '#hours', label: 'Opening Times' },
		{ href: '#gallery', label: 'Gallery' },
		{ href: '#team', label: 'Team' },
		{ href: '#contact', label: 'Contact' }
	];

	function close() {
		open = false;
	}
</script>

<nav class="nav">
	<a class="brand" href="#top" onclick={close}>{business.name}</a>

	<button
		class="menu-toggle"
		aria-label="Toggle menu"
		aria-expanded={open}
		onclick={() => (open = !open)}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>

	<div class="links" class:open>
		{#each links as link}
			<a href={link.href} onclick={close}>{link.label}</a>
		{/each}
		<a class="book-link" href="#booking" onclick={close}>Book Now</a>
	</div>
</nav>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.5rem;
		background: rgba(11, 11, 12, 0.9);
		backdrop-filter: blur(6px);
		border-bottom: 1px solid var(--color-border);
	}
	.brand {
		font-family: var(--font-display);
		color: var(--color-text);
		font-weight: 700;
		font-size: 1.35rem;
		text-decoration: none;
		letter-spacing: 0.02em;
	}
	.links {
		display: flex;
		align-items: center;
		gap: 1.75rem;
	}
	.links a {
		color: var(--color-text-muted);
		text-decoration: none;
		font-size: 0.95rem;
		transition: color var(--transition-base);
	}
	.links a:hover {
		color: var(--color-text);
	}
	.book-link {
		padding: 0.55rem 1.15rem;
		background-color: var(--color-accent);
		color: var(--color-accent-contrast) !important;
		border-radius: 999px;
		font-weight: 600;
	}
	.book-link:hover {
		background-color: var(--color-accent-hover);
		color: var(--color-accent-contrast) !important;
	}
	.menu-toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 32px;
		height: 32px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}
	.menu-toggle span {
		display: block;
		height: 2px;
		background: var(--color-text);
		border-radius: 1px;
	}

	@media (max-width: 720px) {
		.menu-toggle {
			display: flex;
		}
		.links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
			background: var(--color-bg);
			border-bottom: 1px solid var(--color-border);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.25s ease;
		}
		.links.open {
			max-height: 24rem;
		}
		.links a {
			width: 100%;
			padding: 1rem 1.5rem;
			box-sizing: border-box;
			border-top: 1px solid var(--color-border);
		}
		.book-link {
			border-radius: 0;
			text-align: center;
		}
	}
</style>
