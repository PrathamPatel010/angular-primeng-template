import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { HelloWorld } from "./components/hello-world/hello-world";

export const routes: Routes = [
  { path: "", pathMatch: "full", component: Home },
  { path: "hello", component: HelloWorld },
  { path: "**", redirectTo: "/" },
];
