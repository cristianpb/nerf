<!-- Renders any page at /blog/category/* -->
<script>
  import { Heading } from 'flowbite-svelte';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'

	export let data

  const { page, posts, category, total } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, total)
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>



<div class="text-center">
  <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Blog category: {category}</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">

          {#if posts.length}
            <PostsList posts={posts} />
          {:else}
            <p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

            <p><a href="/blog">Back to blog</a></p>
          {/if}
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
</div>


