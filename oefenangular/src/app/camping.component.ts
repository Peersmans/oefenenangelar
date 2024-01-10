import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-camping',
    templateUrl: './camping.component.html'
})

export class campingcomponent{
    @Input()
    campinglist: String[] = [];
    @Input()
    campingRegistratieList!: string[];
}