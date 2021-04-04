# svelte-router-pagejs
A simple router for Svelte using Page.js.

# Motivation
After trying Page.js with Svelte, I asked myself if it is possible to create components together with Page.js to better handle routing. Then I stumbled upon a post from codechips.me with the same goal as I am. And here it is.

# Technology/framework
- page
- rollup
- svelte

# How to use?
```ts
<script lang="ts">
  import { Route, Router } from "svelte-router-pagejs";
  import Index from "./pages/Index.svelte";
  import PageNotFound from "./pages/PageNotFound.svelte";
</script>

<Router>
    <Route path="/" component={Index} />
    <Route path="*" component={PageNotFound} />
</Router>
```

# Contribute
Sure.

# Credits
Credits to everyone that made the packages that this project is using.

# License
This project is [MIT licensed](https://opensource.org/licenses/MIT).
