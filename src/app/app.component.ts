import { Component, OnInit } from "@angular/core";
import { RadiosService } from "./services/radios.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  radios: any;
  name: any;
  id: any;
  constructor(private radiosService: RadiosService) {}
  ngOnInit() {
    this.radiosService.getRadios().subscribe(res => {
      this.radios = res.radios;
      this.some();
    });
  }

  some() {
    const reduses = this.radios.reduce((a, b) => a + b.frequency, 0);
    console.log(reduses.toFixed(2));
  }

  onToggleCollapse(id): void {
    this.id = id;
  }

  onOff(id): void {
    this.id = null;
  }
}
