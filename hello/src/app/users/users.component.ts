import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  firstName = '';
  lastName ='';
  name = '';
  users = []; //Array
  show = true;
  count = 0;
  checkedUser = 0;

  inputYourName(event: any): void{
    this.firstName = event.target.value;
  }

  inputLastName(input: string): void{
    this.lastName = input;
  }

  toggle(index: number){
    if(!this.users[index].checkedUser){
      this.checkedUser = this.checkedUser+1;
    }
    else{
      this.checkedUser = this.checkedUser-1;
    }
    this.users[index].checkedUser = !this.users[index].checkedUser
  }

  saveData(): void{
    if (this.firstName == null || this.firstName.trim() === ''){
      return
    }
    this.name = `${this.firstName} ${this.lastName}`;
    this.users.push({title: this.name, checkedUser: false});
    this.count++;
  
  }


  ngOnInit(): void {
    
  }

}