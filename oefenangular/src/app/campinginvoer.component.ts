import { Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-camping-invoer',
    templateUrl: './campinginvoer.component.html'
})

export class campinginvoercomponent{
    @Output() campingcreate= new EventEmitter<string>();
    invoerCampingNaam='';

    onCreateCamping() {
        console.log("Created a camping: " + this.invoerCampingNaam);
        this.campingcreate.emit(this.invoerCampingNaam);
        this.invoerCampingNaam = '';
    }
    Campings: String[] = [];
    
}