import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-zoom-range',
    templateUrl: 'zoom-range.component.html',
    styleUrls: ['zoom-range.component.css']
})
export class ZoomRangeComponent implements OnInit, AfterViewInit, OnDestroy {

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

        this.mapa.on("zoom", (e) => {
            this.zoomLevel = this.mapa.getZoom();
        });

        this.mapa.on("zoomend", (e) => {
            if( this.mapa.getZoom() > 20) {
                this.mapa.zoomTo(20);
            }
        });

        this.mapa.on("move", (e) => {
            this.center = this.mapa.getCenter();
        });
    }

    ngOnDestroy(): void {
        this.mapa.off("zoom", () => {});
        this.mapa.off("zoomend", () => {});
        this.mapa.off("move", () => {});
    }

    zoomOut() {
        this.mapa.zoomOut();
    }

    zoomIn() {
        this.mapa.zoomIn();
    }

    range(value: string) {
        this.mapa.zoomTo(Number(value));
    }

}
