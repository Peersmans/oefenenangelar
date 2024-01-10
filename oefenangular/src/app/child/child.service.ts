import { Injectable } from "@angular/core";

@Injectable()

export class childService {
    invoerRij: string[] = ['test'];

    onChildInvoerCreated(name:string) {
        this.invoerRij.push(name);
    }
}