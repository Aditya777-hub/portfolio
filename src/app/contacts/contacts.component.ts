import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contacts',
    imports: [FormsModule, CommonModule],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.css'
})
export class ContactsComponent  implements OnInit {

  user: any[] = [];
  signobj: any = {
    Name: '',
    Mobile: '',
    Message:'',
  }

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem('user');
    if (local != null) {
      this.user = JSON.parse(local);
    }
  }

  SignUp() {
    const userExist = this.user.find(m => m.Name === this.signobj.Name && m.Mobile === this.signobj.Mobile);
    if (!userExist) {
      this.user.push(this.signobj);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.signobj = { Name: '', Mobile: '',Message:'' };
      alert('thank uu !!')
    } else {
      alert('User already exists');
    }
  }


 

}
