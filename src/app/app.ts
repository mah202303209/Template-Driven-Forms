import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  onSubmit(form: NgForm) {
    console.log('Form Submitted', form.value);
    alert('Form Submitted Successfully ' + JSON.stringify(form.value));
  }
}
