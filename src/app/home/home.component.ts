import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
[x: string]: any;

  constructor(private router:Router){

  }


  isActive: boolean = false;

  ngOnInit(): void {
    // Add a delay to activate the transition after the page loads
    setTimeout(() => {
      this.isActive = true;
    }, 300); // 300ms delay
  }


  navigate(){
    this.router.navigate(['/contacts']);
  }

  img1():void{
    window.open('https://github.com/Aditya777-hub', '_blank');
  }

  img2():void{
    window.open('https://www.linkedin.com/in/aditya-gade-556289320/', '_blank');
  }
  
  img3():void{
    window.location.href = 'mailto:gade2945@gmail.com?subject=Hello&body=This is the email body.';

  }
}
