import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputOutputComponent } from './input-output/input-output.component';

@Component({
  selector: 'app-parameter-decorators',
  standalone: true,
  imports: [CommonModule, InputOutputComponent],
  templateUrl: './parameter-decorators.component.html',
  styleUrl: './parameter-decorators.component.scss',
})
export class ParameterDecoratorsComponent {
  value: string = '15/may/1998';

  fromChild: string = '';

  isRedPopupOpen: boolean = false;

  courses: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'JavaScript Marathon Interview -Questions Series',
    },
    {
      id: 2,
      name: 'Mastering React With InterviewQuestions, eStore Project',
    },
    {
      id: 3,
      name: 'Mastering TypeScript With MarathodInterview Questions',
    },
    {
      id: 4,
      name: 'Mastering HTML, CSS, Sass, Bootstrap + Interview Questions',
    },
  ];

  recieve(data: string) {
    this.fromChild = data;
  }
  openPopup() {
    this.isRedPopupOpen = true;
  }
  onGetE(e: any) {
    console.log(e);
  }
}
