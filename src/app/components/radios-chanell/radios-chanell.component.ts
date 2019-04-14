import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-radios-chanell",
  templateUrl: "./radios-chanell.component.html",
  styleUrls: ["./radios-chanell.component.scss"]
})
export class RadiosChanellComponent implements OnInit {
  @Input() radio: any;
  constructor() {}

  ngOnInit() {}
}
