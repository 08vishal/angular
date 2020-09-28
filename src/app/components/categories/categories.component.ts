import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public val: any;
  dis:boolean;
  text = '';
  len: number=0;
  
 // valueFromOtherComponent="for child";
  categories = [
    {
      name: "Science"
    },
    {
      name : "Arts"
    }
  ]
  service(){
    // this.valueFromOtherComponent=document.getElementById('a').innerHTML;
  }
  // value() {
  //   return "Vishal";
  // }
  
  constructor() { }

  ngOnInit(): void {
    this.dis=false;
    console.log("inside onkey");
  }
  onKeyUp(x){
    
    this.text += x.value;
   
    console.log(this.text.length);
    if(this.text.length>10){
      console.log("inside onkey");
      this.dis=true;
    }
    
    
  }

}
