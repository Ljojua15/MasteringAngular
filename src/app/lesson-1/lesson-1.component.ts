import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-lesson-1",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./lesson-1.component.html",
  styleUrl: "./lesson-1.component.scss",
})
export class Lesson1Component {
  name: any = "";
  show: boolean = false;

  display(msg: string) {
    alert(msg);
  }

  keyPress(e: any) {
    if (e.shiftKey && e.key === "Y") {
      console.log(e.key, "sss");
    }
  }

  wheels: any = [
    { wheel: "bronz", color: "black", mark: "bonza", id: 129 },
    { wheel: "ultra", color: "white", mark: "ultraza", id: 130 },
    { wheel: "orng", color: "orange", mark: "night", id: 131 },
  ];
}
