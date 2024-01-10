import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-camping-registratie',
    templateUrl: './registratie.component.html'
})

export class campingregistratieinvoercomponent {
    @Output() campingRegistratieCreate = new EventEmitter<string>();
    InvoerCampingRegistratie ='';
NieuweCampinggasten: string[] = [];

oncreatecampingregistratie(){
    console.log("Created a campingregistratie: "+ this.InvoerCampingRegistratie);
    this.campingRegistratieCreate.emit(this.InvoerCampingRegistratie);
    this.InvoerCampingRegistratie='';
}
}
