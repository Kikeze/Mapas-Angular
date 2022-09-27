import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-marcadores',
    templateUrl: 'marcadores.component.html',
    styleUrls: ['marcadores.component.css']
})
export class MarcadoresComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild("mapa") divMapa!: ElementRef;

    mapa!: mapboxgl.Map;
    zoomLevel: number = 15;
    center: {lng: number, lat: number} = {lng: -99.13320026111822, lat: 19.432646073942443};

    markers: MarkerItem[] = [];

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

        // const marker = new mapboxgl.Marker()
        //     .setLngLat(this.center)
        //     .addTo(this.mapa);

        this.mapa.on("click", (e) => {
            this.agregar(e.lngLat);
        });

        this.cargar();
    }

    ngOnDestroy(): void {
        if( this.markers.length >= 1 ) {
            this.markers.forEach((m) => {
                m.marker.off("dragend", () => {});
            });
        }

        this.mapa.off("click", () => {});
    }

    agregar(lnglat: any = null, rgb: any = null) {
        const coords = (lnglat) ? lnglat : this.mapa.getCenter();
        const color = (rgb) ? rgb : "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
        const options = {draggable: true, color};
        const marker = new mapboxgl.Marker( options )
            .setLngLat(coords)
            .addTo(this.mapa);

        marker.on("dragend", (e) => {
            this.guardar();
        });

        this.markers.push({marker, color});

        this.guardar();
    }

    mover(index: number) {
        const marker = this.markers[index].marker;
        this.mapa.flyTo({
            center: marker.getLngLat(),
            zoom: this.zoomLevel
        });

        this.guardar();
    }

    borrar(index: number) {
        const marker = this.markers[index].marker;
        marker.off("dragend", () => {});
        marker.remove();

        this.markers.splice(index, 1);
        this.guardar();
    }

    guardar() {
        if( this.markers.length <= 0 ) {
            return;
        }

        const write = this.markers.map((m) => {
            return {
                color: m.color,
                lnglat: m.marker.getLngLat()
            };
        });

        const buffer = JSON.stringify(write);
        localStorage.setItem("MapasApp_Markers", buffer);
    }

    cargar() {
        const buffer = localStorage.getItem("MapasApp_Markers");
        if( buffer ) {
            const read = JSON.parse(buffer);
            if( read.length >= 1 ) {
                read.forEach((m: any) => {
                    this.agregar(m.lnglat, m.color);
                });
            }
        }
    }

}

interface MarkerItem {
    marker: mapboxgl.Marker
    color: string;
}
