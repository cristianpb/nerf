<script>
  import { Heading, P, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { siteTitle } from '$lib/config';
  import { base } from '$app/paths';
</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<div class="text-center">
  <Heading tag="h1" class="text-nerfblue mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">About</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              At {siteTitle}, we're dedicated to celebrating and promoting the world of Nerf. Our mission is to provide high-quality, informative content that helps Nerf fans of all ages get the most out of their foam blasters. 
            </P>

            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              Whether you're a seasoned Nerf veteran or just discovering the joy of foam blaster battles, {siteTitle} is here to help. Our team of experienced Nerf enthusiasts is passionate about sharing our knowledge and expertise with the community, and we strive to provide content that is both informative and entertaining. 
            </P>

            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              In addition to our in-depth product reviews and buying guides, we also offer a wide range of resources for Nerf fans. From strategy tips and tricks to DIY mods and accessories, {siteTitle} is packed with information that will help you take your Nerf gameplay to the next level. 
            </P>

            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              At {siteTitle}, we believe that Nerf guns are more than just toys - they're a gateway to endless fun and excitement. Whether you're playing with friends, family, or on your own, foam blaster battles offer a unique blend of physical activity, strategy, and creativity. And because Nerf guns are safe, affordable, and easy to use, they're the perfect choice for people of all ages and skill levels. 
            </P>

            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
              So if you're ready to join the ranks of Nerf fans around the world, look no further than {siteTitle}. We're here to help you get started on your foam blaster journey, and we can't wait to see what you accomplish! 
            </P>
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
    <Button class="bg-nerfblue" href="{base}/blog">
      Learn more
      <ArrowRightOutline class="w-6 h-6 ms-2" />
    </Button>
</div>

