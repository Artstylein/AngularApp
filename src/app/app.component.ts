import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project Biing';
  itemCount:number=4;
  btnText:string ="Add an Item";
  goalText:string ="My First project";
  goals=[];
  public AddItemCount(){
   this.goals.push(this.goalText);
   this.goalText='';
   this.itemCount=this.goals.length;

  }
  constructor(){}
  ngOnInit(){
    this.itemCount=this.goals.length;
  }

}
