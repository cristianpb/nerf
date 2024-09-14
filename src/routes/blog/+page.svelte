<script>
  import { Heading, P, Button } from 'flowbite-svelte';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<div class="text-center">
  <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Blog</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
          <div class="text-justify">
            <PostsList posts={data.posts} />
            <Pagination currentPage={1} totalPosts={data.total} />

          </div>
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
</div>


