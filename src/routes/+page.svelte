<script>
	import { siteTitle } from '$lib/config';
  import { Heading, P, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { base } from '$app/paths';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>


<div class="text-center">
  <Heading tag="h1" class="text-nerforange mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">{siteTitle}</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              Whether you're a seasoned Nerf warrior or just discovering the world of foam blasters, our site has something for everyone. From in-depth product reviews and buying guides to tips and tricks for maximizing your Nerf gameplay, {siteTitle} is your one-stop shop for all things Nerf. 
            </P>
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              At {siteTitle}, we're passionate about Nerf guns and the endless fun they provide. From classic dart blasters to the latest high-tech innovations, we love trying out all the newest Nerf gear and sharing our thoughts with the community. Our team is made up of dedicated Nerf enthusiasts who live and breathe foam blasters, so you can trust that our content is knowledgeable, unbiased, and always relevant. 
            </P>
            <img class="inline object-contain w-full md:w-6/12 my-4" src="{base}/images/posts/20240830CelebrateSummerwithNERFSpecialDealsandEventsinAugust_2.jpg" alt="" style="aspect-ratio: 16 / 16;" width="16" height="16">
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400  text-justify">
              In addition to our product reviews and buying guides, we also offer a wide range of resources for Nerf fans of all ages. From strategy tips and tricks to DIY mods and accessories, {siteTitle} is packed with information that will help you take your Nerf gameplay to the next level. 
            </P>
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              So whether you're looking for the perfect blaster to add to your collection or just want to stay up-to-date on the latest Nerf news, {siteTitle} has got you covered. Browse our site today and join the thousands of other Nerf fans who rely on us for all their foam blaster needs!
            </P>
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
    <Button class="bg-nerforange" href="{base}/blog">
      Learn more
      <ArrowRightOutline class="w-6 h-6 ms-2" />
    </Button>
</div>

