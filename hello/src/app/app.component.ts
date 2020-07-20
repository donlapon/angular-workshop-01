import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DONLAPORN';
  score = 100;
  show = true;
  firstName = '';
  lastName ='';
  name = '';
  colors = [ 'Red', 'Green', 'Blue']; //Array


  inputYourName(event: any): void{
    this.firstName = event.target.value;
  }

  inputLastName(input: string): void{
    this.lastName = input;
  }

  saveData(): void{
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
