import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "contact-root",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @ViewChild(NgForm) contactForm: NgForm;
  ngOnInit(): void {
    this.contactForm.reset();
  }
  onSubmit(): void {    
  }
}
