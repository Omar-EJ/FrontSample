import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  UserForm: FormGroup;

  constructor(public userService: UserService,
              public fb: FormBuilder) {
    this.UserForm = this.fb.group({
      nom: new FormControl('')
      ,
      mail : new FormControl(''),
      motdepasse: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.showUsers()
  }

  addUser() {
    this.userService.addUser(this.UserForm.value).subscribe((data)=>{
      console.log(data);
    })
  }

  showUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
      console.log(data);
    })
  }

  Delete(_id: any) {
    this.userService.delete(_id).subscribe((data)=>{
      console.log(_id)
      console.log("Deleted")
  })
  }
}
