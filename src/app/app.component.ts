import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { timer } from "rxjs";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  headerTitle: string = "Projects";
  // modal will pop up after 2 minutes on the site
  modalTime: number = 120000;
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
    const source = timer(this.modalTime);
        source.subscribe(val => {
          $('#resume-modal').modal();
    })
  }
}
