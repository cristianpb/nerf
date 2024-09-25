<script>
  import { NavLi } from 'flowbite-svelte';
  import { base } from '$app/paths';

  export let page;

</script>

<NavLi 
  href={base}{page.route}
  >
  {page.title}</NavLi>
