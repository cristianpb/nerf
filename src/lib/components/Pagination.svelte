<script>
	import { postsPerPage } from '$lib/config'
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';

	export let currentPage
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

  import { Pagination } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  $: pages = [...Array(pagesAvailable)].map((_, i) => {
    return {"name": i+1, href: `${base}${path}/${i+1}`}
  })

  $: {
    pages.forEach((page) => {
      let urlPage = parseInt(page.href.split('/').at(-1));
      if (urlPage === currentPage) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    if (currentPage > 1) {
      currentPage += -1
      const href=`${base}${path}/${currentPage}`
      goto(href, { replaceState: true });
    }
  };
  const next = () => {
    if (currentPage < pagesAvailable) {
      currentPage += 1
      const href=`${base}${path}/${currentPage}`
      goto(href, { replaceState: true });
    }
  };
</script>


<div class="py-2 text-center flex">
  <div class="flex-auto w-0 md:w-2/12"></div>
  <div class="flex-auto w-full md:w-8/12">
    <Pagination {pages} large on:previous={previous} on:next={next} activeClass="border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-nerfblue text-nerforange" icon>
      <svelte:fragment slot="prev">
        {#if currentPage > 1}
          <span class="sr-only">Previous</span>
          <ChevronLeftOutline class="w-6 h-6" />
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="next">
        {#if currentPage < pagesAvailable}
          <span class="sr-only">Next</span>
          <ChevronRightOutline class="w-6 h-6" />
        {/if}
      </svelte:fragment>
    </Pagination>
  </div>
  <div class="flex-auto w-0 md:w-2/12"></div>
</div>
