<script>
  import { Heading, P } from 'flowbite-svelte';
  import { siteTitle } from '$lib/config';
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="text-center">
  <Heading tag="h1" class="text-nerfblue mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Contact</Heading>
    <div class="px-4">
      <div class="flex">
        <div class="flex-auto w-0 md:w-2/12"></div>
        <div class="flex-auto w-full md:w-8/12">
          <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
            At {siteTitle}, we love hearing from our readers! Whether you have a question about Nerf guns, want to share your own tips and tricks, or just want to say hi, we encourage you to reach out and connect with us. 
          </P>
          <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
            To get in touch, simply fill out the contact form below with your name, email address, and message. We'll do our best to respond as quickly as possible, typically within 1-2 business days. 
          </P>
          <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
            In addition to our contact form, {siteTitle} is also active on social media. You can find us on Facebook, Twitter, and Instagram, where we regularly share updates, news, and behind-the-scenes glimpses into the world of Nerf. So be sure to follow us and join the conversation! 
          </P>
          <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-justify">
            At {siteTitle}, our goal is to create a vibrant, supportive community of Nerf fans from around the world. We believe that foam blaster battles are more fun when we all work together, so don't hesitate to reach out and connect with us today. We can't wait to hear from you! 
          </P>
        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
</div>

