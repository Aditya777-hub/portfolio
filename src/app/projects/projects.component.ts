import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  learn():void{
    window.open('https://aditya777-hub.github.io/learning-app/', '_blank');
  }

  smart():void{
window.open('https://aditya777-hub.github.io/smartImageGallery/', '_blank');
  }

  forms():void{
    window.open('https://aditya777-hub.github.io/registration-form/', '_blank');
  }

  game():void{
    window.open('https://aditya777-hub.github.io/XO/', '_blank');
  }

  TO():void{
    window.open('https://aditya777-hub.github.io/To-Do-app/', '_blank');
  }
}
