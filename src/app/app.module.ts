import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RadioStatiosComponent } from "./components/radio-statios/radio-statios.component";
import { RadiosChanellComponent } from './components/radios-chanell/radios-chanell.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RadioStatiosComponent, RadiosChanellComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
