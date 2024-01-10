import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blad2',
  templateUrl: './blad2.component.html',
  styleUrl: './blad2.component.css'
})
export class Blad2Component {
    @Input()
    Adreswaarde: string[] = [];
  }
  
