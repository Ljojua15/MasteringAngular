import { Component, OnInit } from "@angular/core";
import { TestingLifecyclehooksComponent } from "./testing-lifecyclehooks/testing-lifecyclehooks.component";
import { log } from "console";

@Component({
  selector: "app-lifecycle-hooks",
  standalone: true,
  imports: [TestingLifecyclehooksComponent],
  templateUrl: "./lifecycle-hooks.component.html",
  styleUrl: "./lifecycle-hooks.component.scss",
})
export class LifecycleHooksComponent implements OnInit {
  value: string = "yyyyy";
  btnCChangeValue() {
    this.value = "not yyyyy";
  }

  count: number = 0;

  ngOnInit(): void {
    this.counter16();
  }

  counter16() {
    if (this.count < 10) {
      console.log(this.count++);
    }
  }
}
