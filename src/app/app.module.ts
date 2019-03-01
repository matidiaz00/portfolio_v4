import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/router.module';

import { DataService } from './services/data.service';

import { ProgressiveImageLoaderDirective } from './directives/progressive-image-loader.directive';
import { ImagePreloadDirective } from './directives/image-preload.directive';
import { BackrgoundPreloadDirective } from './directives/backrgound-preload.directive';

import { InlineSVGModule } from 'ng-inline-svg';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './components/app.component';
import { RouterOutletComponent } from './components/routerOutlet.component';

import { HeaderComponent } from './components/navigation/header.component';
import { NavComponent } from './components/navigation/nav.component';
import { ArrowsComponent } from './components/navigation/arrows.component';

import { HomeComponent } from './components/pages/home.component';
import { SobreMiComponent } from './components/pages/sobreMi.component';
import { CurriculumComponent } from './components/pages/curriculum.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { ExperienciaComponent } from './components/pages/experiencia.component';
import { HabilidadesComponent } from './components/pages/habilidades.component';
import { ProyectosComponent } from './components/pages/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    CurriculumComponent,
    ContactoComponent,
    HeaderComponent,
    RouterOutletComponent,
    NavComponent,
    ArrowsComponent,
    ProgressiveImageLoaderDirective,
    ImagePreloadDirective,
    BackrgoundPreloadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    InlineSVGModule.forRoot()
  ],
  providers: [
    DataService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }