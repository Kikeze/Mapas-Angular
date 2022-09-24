import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from 'src/app/mapas/mapas-routing.module';
import { MiniMapaComponent } from 'src/app/mapas/components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from 'src/app/mapas/pages/full-screen/full-screen.component';
import { MarcadoresComponent } from 'src/app/mapas/pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from 'src/app/mapas/pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from 'src/app/mapas/pages/propiedades/propiedades.component';


@NgModule({
    declarations: [
        MiniMapaComponent,
        FullScreenComponent,
        MarcadoresComponent,
        ZoomRangeComponent,
        PropiedadesComponent,
    ],
    imports: [
        CommonModule,
        MapasRoutingModule,
    ]
})
export class MapasModule { }
