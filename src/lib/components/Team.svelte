<script>
	import { team } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="team" class="team-section" use:reveal>
	<div class="section-inner">
		<span class="eyebrow">Our People</span>
		<h2 class="section-heading">Meet the Team</h2>
		<div class="members">
			{#each team as person}
				<div class="member">
					<img src={person.image} alt={person.name} loading="lazy" />
					<h3>{person.name}</h3>
					<p class="role">{person.role}</p>
					<p class="bio">{person.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.team-section {
		background: var(--color-bg-raised);
	}
	.members {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
	.member {
		width: 220px;
	}
	.member img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 2px solid var(--color-accent);
		object-fit: cover;
	}
	.member h3 {
		font-size: 1.3rem;
		margin: 1rem 0 0.15rem;
		color: var(--color-text);
	}
	.role {
		color: var(--color-accent);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin: 0 0 0.5rem;
	}
	.bio {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		margin: 0;
	}
</style>
