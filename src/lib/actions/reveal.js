// Svelte action: fades + slides an element in once it scrolls into view.
// Usage: <div use:reveal>
/** @param {HTMLElement} node */
export function reveal(node) {
	node.classList.add('reveal');

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('reveal-visible');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
