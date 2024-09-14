<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
  import { Heading, P, Badge } from 'flowbite-svelte';
  import { base } from '$app/paths';
	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<div class="px-4">
  <div class="flex">
    <div class="flex-auto w-0 md:w-4/12"></div>
    <div class="flex-auto w-full md:w-4/12">

      <img
        class="inline object-contain w-full md:w-full my-4"
        src={base}{coverImage}
        alt=""
        style="aspect-ratio: {coverWidth} / {coverHeight};"
        width={coverWidth}
        height={coverHeight}
        />
        <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{title}</Heading>

          <P class="pb-4" size="xs">
            <b>Published:</b>
            {date}
            <br />
            <b>Updated:</b>
            {updated}
          </P>


          <div class="text-justify prose dark:prose-invert max-w-full prose-xl">
            <svelte:component this={PostContent} />
          </div>



          {#if categories}
            <div class="my-4">
              <Heading tag="h2" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-4xl">Posted in:</Heading>
              <ul class="post-footer__categories">
                {#each categories as category}
                  <li>
                    <Badge large>
                      <a class="capitalize" href="{base}/blog/category/{category}/">
                        {category}
                      </a>
                    </Badge>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}


    </div>
    <div class="flex-auto w-0 md:w-4/12"></div>
  </div>
</div>
