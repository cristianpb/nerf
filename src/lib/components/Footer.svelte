<script>
	import { siteAuthor } from '$lib/config';
	import { navItems } from '$lib/config';
	import NavItems from './NavItems.svelte';
  import { base } from '$app/paths';
  import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from 'flowbite-svelte';
</script>

<Footer class="mt-4 p-4 bg-white border-t border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-600">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="{siteAuthor}" year={new Date().getFullYear()} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      {#each navItems as page}
        <FooterLink href={base}{page.route}>{page.title}</FooterLink>
      {/each}
      <FooterLink href="{base}/api/rss.xml" data-sveltekit-reload>RSS</FooterLink>
    </FooterLinkGroup>
  </div>
</Footer>

