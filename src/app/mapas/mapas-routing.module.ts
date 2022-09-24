import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenComponent } from 'src/app/mapas/pages/full-screen/full-screen.component';
import { MarcadoresComponent } from 'src/app/mapas/pages/marcadores/marcadores.component';
import { PropiedadesComponent } from 'src/app/mapas/pages/propiedades/propiedades.component';
import { ZoomRangeComponent } from 'src/app/mapas/pages/zoom-range/zoom-range.component';


const routes: Routes = [
    {
        path: "",
        children: [
            {path: "fullscreen", component: FullScreenComponent},
            {path: "marcadores", component: MarcadoresComponent},
            {path: "propiedades", component: PropiedadesComponent},
            {path: "zoomrange", component: ZoomRangeComponent},
            {path: "**", redirectTo: "fullscreen"},
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapasRoutingModule { }
