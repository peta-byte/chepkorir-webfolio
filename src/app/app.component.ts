import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  headerTitle: string = "Projects";
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(value => {
    	if (value instanceof NavigationEnd) {
          if (value.url && value.url === "/projects") {
	       this.headerTitle = "Projects";
	  } else if (value.url && value.url === "/others") {
	       this.headerTitle = "Others";
	  } else {
	        // Do nothing
      	  }
        }
    });
  }
}
