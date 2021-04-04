<script context="module">
  import { activeRoute } from "./../store";

  let routes = [];
  export function register(route) {
    routes.push(route);
  }
</script>

<script>
  import page from "page";
  import { onDestroy, onMount } from "svelte";

  function setupRoutes() {
    for (let route of routes) {
      page(route.path, () => {
        $activeRoute = route;
      });
    }

    page.start();
  }

  onMount(() => setupRoutes());
  onDestroy(() => page.stop());
</script>

<slot />
