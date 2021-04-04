<script>
  import { register } from "./Router.svelte";
  import { activeRoute } from "./../store";

  export let path = "/";
  export let component;

  register({ path, component });
</script>

{#if $activeRoute.path === path}
  <svelte:component this={component} />
{/if}
