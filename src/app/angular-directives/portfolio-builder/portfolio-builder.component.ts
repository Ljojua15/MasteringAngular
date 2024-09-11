import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-portfolio-builder",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./portfolio-builder.component.html",
  styleUrl: "./portfolio-builder.component.scss",
})
export class PortfolioBuilderComponent {
  nm: any = "";
  em: any = "";
  ph: any = "";
  add: any = "";

  qualif = [{ school: "", degree: "", year: "" }];

  submitted: boolean = false;

  addQualif() {
    this.qualif.push({ school: "", degree: "", year: "" });
  }

  subm() {
    this.submitted = true;
  }

  edit() {
    this.submitted = false;
  }
}
