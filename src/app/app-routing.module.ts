import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParadigmaComponent } from './pages/paradigma/paradigma.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "typescript", component: TypescriptComponent, pathMatch: "full" },
  { path: "paradigma", component: ParadigmaComponent, pathMatch: "full" },
  { path: "project", component: ProjectComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent, pathMatch: "full" },
  { path: '**', redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
