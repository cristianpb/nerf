<script>
    import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';
    import { DarkMode } from 'flowbite-svelte';
    import { navItems } from '$lib/config';
    import NavItem from './NavItem.svelte';
    import { navigating, page } from '$app/stores';
    import { base } from '$app/paths';
    import { siteTitle } from '$lib/config'

    let hideNavMenu = true;
    let darkmodebtn = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg';

    $: activeUrl = $page.url.pathname;

    $: if ($navigating) {
        hideNavMenu = true
    }

    const onNavHamburgerClick = (toggleFn) => {
      toggleFn();
      hideNavMenu = !hideNavMenu;
    };

    const onNavLinkClick = (toggleFn) => {
      hideNavMenu = true;
    };
</script>

<Navbar let:toggle>
    <NavBrand href="{base}/" >
      <enhanced:img src="$lib/assets/images/logo.png?w=50;25;5" sizes="(min-width:1920px) 50px, (min-width:1080px) 25px, (min-width:768px) 5px" width="40" height="30" alt="{siteTitle} logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{siteTitle}</span>
    </NavBrand>
    <NavHamburger onClick={() => onNavHamburgerClick(toggle)} />
    <NavUl {activeUrl}  
        hidden={hideNavMenu}
        on:click={() => onNavLinkClick(toggle)}
        >
        {#each navItems as page}
          <NavItem {page} />
        {/each}
        <DarkMode btnClass={darkmodebtn} />
        </NavUl>
</Navbar>
