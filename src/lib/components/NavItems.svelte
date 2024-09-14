<script>
  import { base } from '$app/paths';
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
  import { NavLi, NavUl } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg';
</script>

<NavUl >
	{#each navItems as page}
    <NavLi href={base}{page.route}>{page.title}</NavLi>
	{/each}
  <DarkMode btnClass={darkmodebtn} />
</NavUl>
