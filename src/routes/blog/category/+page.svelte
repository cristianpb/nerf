<script>
  import { Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';
	export let data
  const { uniqueCategories } = data
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div class="text-center">
  <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">All blog categories</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
          <ul class="py-4">
            {#each uniqueCategories as category}
              <li class="py-4">
                <Button href="/blog/category/{category.title}">
                  { category.title } - ({category.count})
                </Button>
              </li>
            {/each}
          </ul>
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
</div>
