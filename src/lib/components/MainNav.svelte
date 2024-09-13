<script>
	import { isMenuOpen } from '../assets/js/store';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import NavItems from './NavItems.svelte';
  import { Navbar, NavBrand, NavHamburger } from 'flowbite-svelte';
  import { base } from '$app/paths';
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>

<Navbar>
	
  <NavBrand href="/">
    <img src="{base}/favicon.png" class="me-3 h-6 sm:h-9" alt="{siteTitle}" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{siteTitle}</span>
  </NavBrand>
  <NavHamburger  />
	<NavItems />
</Navbar>
