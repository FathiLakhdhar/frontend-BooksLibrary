import { Component, Input } from '@angular/core';


@Component({
    selector: 'item-menu',
    template: `
        <ul class="bib-nav-item" (click)="toggle()">
    	    <li class="bib-nav-icon"><md-icon class="md-24">{{icon}}</md-icon></li>
		    <li class="bib-nav-label">{{label}}</li>
            <div *ngIf="isExpanded">
                <ng-content></ng-content> 
            </div>
		</ul>
    `,
    styleUrls: ['../assets/css/sidenav.menu.css']
})


export class ItemMenuComponent {
    @Input('bib-nav-icon') icon;
    @Input('bib-nav-label') label;
    isExpanded = false;


    toggle() {
        console.log('toggle');
        this.isExpanded=!this.isExpanded;
    }



}