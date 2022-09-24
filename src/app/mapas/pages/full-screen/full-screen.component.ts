import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-full-screen',
    templateUrl: 'full-screen.component.html',
    styleUrls: ['full-screen.component.css']
})
export class FullScreenComponent implements OnInit, AfterViewInit {

    @ViewChild("mapa") divMapa!: ElementRef;

    mapa!: mapboxgl.Map;
    zoomLevel: number = 10;
    center: {lng: number, lat: number} = {lng: -99.05241450416831, lat: 19.449652425341};

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    ngAfterViewInit(): void {
        this.mapa = new mapboxgl.Map({
            container: this.divMapa.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.center,
            zoom: this.zoomLevel
        });
    }

}

