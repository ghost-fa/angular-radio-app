import { Component, OnInit } from "@angular/core";
import { RadiosService } from "./services/radios.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  radios: any;

  constructor(private radiosService: RadiosService) {}
  ngOnInit() {
    this.radiosService.getRadios().subscribe(res => (this.radios = res.radios));
  }
}
