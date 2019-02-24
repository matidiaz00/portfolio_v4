import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { RouterOutletComponent } from '../components/routerOutlet.component';

import { HomeComponent } from '../components/pages/home.component';
import { SobreMiComponent } from '../components/pages/sobreMi.component';
import { CurriculumComponent } from '../components/pages/curriculum.component';
import { ExperienciaComponent } from '../components/pages/experiencia.component';
import { HabilidadesComponent } from '../components/pages/habilidades.component';
import { ProyectosComponent } from '../components/pages/proyectos.component';
import { ContactoComponent } from '../components/pages/contacto/contacto.component';
 
const appRoutes: Routes = [
    { path: '',                       redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio',                 component: HomeComponent },
    //{ path: 'sobre_mi',               component: SobreMiComponent },    
    { path: 'proyectos',              component: RouterOutletComponent,
      children: [
        { path: '',                   redirectTo: '/proyectos/home', pathMatch: 'full' },
        { path: 'home',               component: ProyectosComponent },
        { path: 'excel',              component: ProyectosComponent },
        { path: 'pdf_generator',      component: ProyectosComponent },
        { path: 'rockapp',            component: ProyectosComponent },
        { path: 'ficohsa',            component: ProyectosComponent },
        { path: 'banco_promerica',    component: ProyectosComponent },
        { path: 'schenker',           component: ProyectosComponent },
        { path: 'mir-arte',           component: ProyectosComponent },
        { path: 'miami_innovation_center',  component: ProyectosComponent },
        { path: 'visa_promerica',     component: ProyectosComponent },
        { path: 'visa_spotify',       component: ProyectosComponent },
        { path: 'book_contact',       component: ProyectosComponent },
        { path: 'templo_de_sintra',   component: ProyectosComponent }
      ]
    },
    { path: 'habilidades',            component: RouterOutletComponent,
      children: [
        { path: '',                   redirectTo: '/habilidades/home', pathMatch: 'full' },
        { path: 'home',               component: HabilidadesComponent },
        { path: 'frontend',           component: HabilidadesComponent },
        { path: 'diseno',             component: HabilidadesComponent },
        { path: 'backend',            component: HabilidadesComponent },
        { path: 'idiomas',            component: HabilidadesComponent },
        { path: 'mas',                component: HabilidadesComponent }
      ]
    },
    { path: 'experiencia',            component: RouterOutletComponent,
      children: [
        { path: '',                   redirectTo: '/experiencia/home', pathMatch: 'full' },
        { path: 'home',               component: ExperienciaComponent },
        { path: 'kingdesign',         component: ExperienciaComponent },
        { path: '451',                component: ExperienciaComponent },
        { path: 'contactar',          component: ExperienciaComponent },
        { path: 'kadampa',            component: ExperienciaComponent },
        { path: 'w3',                 component: ExperienciaComponent },
        { path: 'contactar2',         component: ExperienciaComponent },
        { path: 'myciber',            component: ExperienciaComponent }
      ]
    },
    { path: 'curriculum',             component: CurriculumComponent },
    { path: 'contacto',               component: ContactoComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}