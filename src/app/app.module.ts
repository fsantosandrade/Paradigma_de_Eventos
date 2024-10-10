import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParadigmaComponent } from './pages/paradigma/paradigma.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { CardVantagensComponent } from './components/card-vantagens/card-vantagens.component';
import { CardDesvantagensComponent } from './components/card-desvantagens/card-desvantagens.component';
import { CardTimeLineComponent } from './components/card-time-line/card-time-line.component';
import { CardTimeLineReverseComponent } from './components/card-time-line-reverse/card-time-line-reverse.component';
import { CardCronologiaComponent } from './components/card-cronologia/card-cronologia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ParadigmaComponent,
    TypescriptComponent,
    CardVantagensComponent,
    CardDesvantagensComponent,
    CardTimeLineComponent,
    CardTimeLineReverseComponent,
    CardCronologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
