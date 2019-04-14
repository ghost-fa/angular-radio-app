import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-radio-statios",
  templateUrl: "./radio-statios.component.html",
  styleUrls: ["./radio-statios.component.scss"]
})
export class RadioStatiosComponent implements OnInit {
  @Input() radio: any;
  constructor() {}

  ngOnInit() {}
}
