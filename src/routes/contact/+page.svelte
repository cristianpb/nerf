<script>
  import { Heading, P, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
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
          <div class="text-justify">
            <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
          </div>

        </div>
        <div class="flex-auto w-0 md:w-2/12"></div>
      </div>
    </div>
    <Button class="bg-nerfblue" href="/">
      Learn more
      <ArrowRightOutline class="w-6 h-6 ms-2" />
    </Button>
</div>

