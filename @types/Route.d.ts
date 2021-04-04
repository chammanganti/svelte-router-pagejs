import { SvelteComponent } from "./shared";

interface RouteProps {
  component: Function;
  path: string;
}

declare class Route extends SvelteComponent<RouteProps> {}

export default Route;
