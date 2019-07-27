import { Component, OnInit } from "@angular/core";
import { nextAnimation } from "../app.animations";

@Component({
  selector: "projects-root",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  animations: [nextAnimation]
})
export class ProjectsComponent implements OnInit {
  state: string = "in";
  ngOnInit(): void {
    this.state = this.state === "in" ? "out" : "in";
  }
}
