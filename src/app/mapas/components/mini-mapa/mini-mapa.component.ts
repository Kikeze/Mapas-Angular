import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-mini-mapa',
    templateUrl: 'mini-mapa.component.html',
    styleUrls: ['mini-mapa.component.css']
})
export class MiniMapaComponent implements OnInit, AfterViewInit {

    @Input() lngLat: [number, number] = [0,0];

    @ViewChild("mapa") divMapa!: ElementRef;

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    ngAfterViewInit(): void {
        const mapa = new mapboxgl.Map({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.lngLat,
            zoom: 15,
            interactive: false
        });

        const marker = new mapboxgl.Marker()
            .setLngLat(this.lngLat)
            .addTo(mapa);
    }

}
