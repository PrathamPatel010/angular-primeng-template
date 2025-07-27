import { Component } from "@angular/core";
import { StatsWidget } from "../dashboard/statswidget";
import { ProductOverviewWidget } from "../dashboard/productoverviewwidget";
import { RecentActivityWidget } from "../dashboard/recentactivitywidget";
import { SalesTrendWidget } from "../dashboard/salestrendwidget";

@Component({
  selector: "app-home",
  imports: [
    StatsWidget,
    ProductOverviewWidget,
    RecentActivityWidget,
    SalesTrendWidget,
  ],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
