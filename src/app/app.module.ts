import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { OthersComponent } from "./others/others.component";
import { ProfileComponent } from "./profile/profile.component";
import { LeoComponent } from "./projects/ai/leo.component";
import { BlockchainComponent } from "./projects/blockchain/blockchain.component";
import { JswebAppComponent } from "./projects/js-web-app-dev/js-web-app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContainerizationComponent } from "./slides/containerization/containerization.component";
import { RockCityComponent } from "./slides/rock-city/rock-city.component";
import { TruckHuntComponent } from "./slides/truck-hunt/truck-hunt.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TruckHuntComponent,
    RockCityComponent,
    ContainerizationComponent,
    LeoComponent,
    BlockchainComponent,
    JswebAppComponent,
    ProjectsComponent,
    OthersComponent,
    ContactComponent,
    ProfileComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    RouterModule.forRoot([
      { path: "projects", component: ProjectsComponent },
      { path: "others", component: OthersComponent },
      { path: "", redirectTo: "projects", pathMatch: "full" }
    ]),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
