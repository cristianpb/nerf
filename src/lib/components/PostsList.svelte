<script>
  import { base } from '$app/paths';
	export let posts = []
  import { Card } from 'flowbite-svelte';
</script>


<div class="space-y-4 md:space-y-0 grid md:grid-cols-2">
  {#each posts as post}
    <Card img="{base}{post.coverImage}" href="{base}/blog/{post.slug}" horizontal size="md" >
    <h5 class="mb-2 text-2xl text-justify font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
    <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400 leading-tight">{post.excerpt}</p>
    </Card>
  {/each}
</div>
