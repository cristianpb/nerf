<!-- Renders posts listed by category -->
<script>
  import { Heading } from 'flowbite-svelte';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription, postsPerPage } from '$lib/config'

	export let data
	const { page, category, totalPosts, posts } = data 

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog category {category} - page {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
  <div class="text-center">
    <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Category: {category}</Heading>
    <div class="flex flex-col items-center justify-center gap-2">
      <div class="text-sm text-gray-700 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">{lowerBound}</span>
        to
        <span class="font-semibold text-gray-900 dark:text-white">{upperBound}</span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">{totalPosts}</span>
        Entries
      </div>
    </div>

    <Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />


      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
          <PostsList {posts} />
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>

    <Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />
  </div>
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
