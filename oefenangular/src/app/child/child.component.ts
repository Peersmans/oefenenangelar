import { Component, OnInit} from '@angular/core';
import { childService } from './child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
childInvoerModel = '';
constructor(private childService: childService) {}
onChildInvoer() {
  console.log("Data verstuurd: " + this.childInvoerModel);
  this.childService.onChildInvoerCreated(this.childInvoerModel);
  this.childInvoerModel = '';
}
ngOnInit() {
  
}
}
