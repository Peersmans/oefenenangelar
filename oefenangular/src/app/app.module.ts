import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { campingcomponent } from './camping.component';
import { campinginvoercomponent } from './campinginvoer.component';
import { campingregistratieinvoercomponent } from './registratie/registratie.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Blad1Component } from './blad1/blad1.component';
import { Blad2Component } from './blad2/blad2.component';
import { AppRoutingModule } from './app.routing';
import { childService } from './child/child.service';
import { Child2Component } from './child2/child2.component';
import { Child2AComponent } from './menu/child2-a/child2-a.component';
import { Child2BComponent } from './menu/child2-b/child2-b.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    campingcomponent,
    campinginvoercomponent,
    campingregistratieinvoercomponent,
    ParentComponent,
    ChildComponent,
    Blad1Component,
    Blad2Component,
    Child2Component,
    Child2AComponent,
    Child2BComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [childService],
  bootstrap: [AppComponent]
})
export class AppModule { }
