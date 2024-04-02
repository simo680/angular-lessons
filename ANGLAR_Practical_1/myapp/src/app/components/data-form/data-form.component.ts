import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css',
})
export class DataFormComponent {}
