import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() onOff: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onToogle() {
    this.onOff.emit();
  }
}
