import { Component } from "@angular/core";
import { AppTopbar } from "./layout/app.topbar";
import { AppFooter } from "./layout/app.footer";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [AppTopbar, AppFooter, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
