import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AppComponent } from "./app.component";
import { LeoComponent } from "./projects/ai/leo.component";
import { BlockchainComponent } from "./projects/blockchain/blockchain.component";
import { JswebAppComponent } from "./projects/js-web-app-dev/js-web-app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContainerizationComponent } from "./slides/containerization/containerization.component";
import { RockCityComponent } from "./slides/rock-city/rock-city.component";
import { TruckHuntComponent } from "./slides/truck-hunt/truck-hunt.component";
import { ResearchComponent } from "./research/research.component";

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
    ResearchComponent
  ],
  imports: [BrowserModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
