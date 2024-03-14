import { Component } from '@angular/core';
import { HugeComponent } from "../huge/huge.component";

@Component({
    selector: 'app-defer',
    standalone: true,
    templateUrl: './defer.component.html',
    styleUrl: './defer.component.css',
    imports: [HugeComponent]
})
export class DeferComponent {

  loadDeffered: boolean = false;


}
