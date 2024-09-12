<script>
	import { siteAuthor } from '$lib/config';
	import { navItems } from '$lib/config';
	import NavItems from './NavItems.svelte';
  import { base } from '$app/paths';
</script>

<footer>
	<nav>
		<ul>
			<li>
        <a href="{base}/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
        <a href="{base}/">Home</a>
			</li>
		</ul>
	</nav>
	<nav>
    <ul>
      {#each navItems as page}
        <a href={base}{page.route}>
          {page.title}
        </a>
      {/each}
    </ul>
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
