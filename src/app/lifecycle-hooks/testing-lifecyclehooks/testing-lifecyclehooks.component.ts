import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { log } from "console";

@Component({
  selector: "app-testing-lifecyclehooks",
  standalone: true,
  imports: [],
  templateUrl: "./testing-lifecyclehooks.component.html",
  styleUrl: "./testing-lifecyclehooks.component.scss",
})
export class TestingLifecyclehooksComponent implements OnChanges {
  @Input() testInput: string = "";
  current: string | undefined = "";
  old: string | undefined = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes["testInput"]);

    if (changes["testInput"]) {
      this.current = changes["testInput"].currentValue;
      this.old = changes["testInput"].previousValue;
      console.log(changes);
    }
  }
}
