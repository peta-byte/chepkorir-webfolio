import { Component, OnInit } from "@angular/core";
import { nextAnimation } from "../app.animations";

@Component({
  selector: "others-root",
  templateUrl: "./others.component.html",
  styleUrls: ["./others.component.css"],
  animations: [nextAnimation]
})
export class OthersComponent implements OnInit {
  state: string = "in";
  ngOnInit(): void {
    this.state = this.state === "in" ? "out" : "in";
  }
}
