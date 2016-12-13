import { Component } from '@angular/core';
import { Location } from "@angular/common";
 
@Component({
    selector: 'app-part-b',
    templateUrl: './part-b.component.html',
    styleUrls: ['./part-b.component.css']
})
export class PartBComponent {
 
    constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }
 
}
