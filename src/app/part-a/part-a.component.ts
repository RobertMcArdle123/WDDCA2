
import { Component } from '@angular/core';
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-part-a',
    templateUrl: './part-a.component.html',
    styleUrls: ['./part-a.component.css']
})
export class PartAComponent  {
    title = 'Temperature Unit Convertor';
    
    constructor(private router: Router) { }
 
    navigate() {
        this.router.navigate(["part-b"]);

       

        }
    }

  
 
}