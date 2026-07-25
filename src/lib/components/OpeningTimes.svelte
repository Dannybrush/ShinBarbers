<script>
	import { hours } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="hours" class="hours-section" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Opening Times</span>
		<h2 class="section-heading">When to Find Us</h2>
		<div class="list">
			{#each hours as slot}
				<div class="row">
					<span class="day">{slot.day}</span>
					<span class="time">{slot.time}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hours-section {
		background: var(--color-bg-raised);
	}
	.list {
		max-width: 480px;
		margin: 0 auto;
		text-align: left;
		border-top: 1px solid var(--color-border);
	}
	.row {
		display: flex;
		justify-content: space-between;
		padding: 0.85rem 0;
		border-bottom: 1px solid var(--color-border);
	}
	.day {
		color: var(--color-text);
		font-weight: 500;
	}
	.time {
		color: var(--color-text-muted);
	}
</style>
