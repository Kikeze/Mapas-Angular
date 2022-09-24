import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    menu: MenuItem[] = [
        {nombre: "Full Screen", ruta: "/mapas/fullscreen"},
        {nombre: "Marcadores", ruta: "/mapas/marcadores"},
        {nombre: "Propiedades", ruta: "/mapas/propiedades"},
        {nombre: "Zoom Range", ruta: "/mapas/zoomrange"}
    ];

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}

interface MenuItem {
    nombre: string;
    ruta: string;
}
