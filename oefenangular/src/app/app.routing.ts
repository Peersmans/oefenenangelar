import { NgModel } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { NgModule } from "@angular/core";
import { Child2Component } from "./child2/child2.component";
import { Child2AComponent } from "./menu/child2-a/child2-a.component";
import { Child2BComponent } from "./menu/child2-b/child2-b.component";
import { Blad1Component } from "./blad1/blad1.component";

const Routes: Routes = [
    {path: '', component: ParentComponent},
    {path: 'child', component: ChildComponent},
    {path: 'child2', component: Child2Component},
    {path: 'child2A', component: Child2AComponent},
    {path: 'child2B', component: Child2BComponent},
    {path: 'blad1', component: Blad1Component}
]

@NgModule ({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}