import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blad1',
  templateUrl: './blad1.component.html',
  styleUrl: './blad1.component.css'
})
export class Blad1Component {
    @Output() uitvoerCreate = new EventEmitter<string>();
    blad1AdresModel = '';
    onblad1Adres() {
      console.log("Adres verstuurd: " + this.blad1AdresModel);
      this.uitvoerCreate.emit(this.blad1AdresModel);
      this.blad1AdresModel = '';
}
}
