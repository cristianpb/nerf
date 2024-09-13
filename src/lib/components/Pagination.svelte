<script>
	import { postsPerPage } from '$lib/config'
  import { base } from '$app/paths';

	export let currentPage
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	const isCurrentPage = (page) => page == currentPage
  //import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  $: pages = [...Array(pagesAvailable)].map((v, i) => {
    return {"name": i+1, href: `${base}${path}/${i+1}`}
  })

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === currentPage) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>


<div class="py-2 text-center flex">
  <div class="flex-auto w-0 md:w-2/12"></div>
  <div class="flex-auto w-full md:w-8/12">
    <Pagination {pages} large on:previous={previous} on:next={next} classActive="bg-nerforange text-nerforange" icon>
    <svelte:fragment slot="prev">
      <span class="sr-only">Previous</span>
      <ChevronLeftOutline class="w-6 h-6" />
    </svelte:fragment>
    <svelte:fragment slot="next">
      <span class="sr-only">Next</span>
      <ChevronRightOutline class="w-6 h-6" />
    </svelte:fragment>
    </Pagination>
  </div>
  <div class="flex-auto w-0 md:w-2/12"></div>
</div>
