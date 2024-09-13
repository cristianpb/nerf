<!-- This file handles any /blog/page/x route for pagination -->
<script>
  import { Heading, P, Button } from 'flowbite-svelte';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '$lib/config'

	export let data
	const { page, totalPosts, posts } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
  $: helper = { start: lowerBound, end: upperBound, total: totalPosts };
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
      to
      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
      of
      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
      Entries
    </div>
  </div>

	<Pagination currentPage={page} {totalPosts} />

  <div class="text-center">
    <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Blog</Heading>
      <div class="px-4">
        <div class="flex">
          <div class="flex-auto w-0 md:w-2/12"></div>
          <div class="flex-auto w-full md:w-8/12">
            <div class="text-justify">
              <PostsList {posts} />

            </div>
          </div>
          <div class="flex-auto w-0 md:w-2/12"></div>
        </div>
      </div>
  </div>

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
