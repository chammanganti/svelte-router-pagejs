import { writable } from "svelte/store";

let initialActiveRoute = {
  component: null,
  path: "/",
};

export const activeRoute = writable(initialActiveRoute);
