import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { OpenImageComponent } from './open-image/open-image.component';



const routes: Routes = [

  {path:'men',component:MenComponent},
  {path:'open-image',component:OpenImageComponent},

  {path:'women',component:WomenComponent}
  // {path:"",component:WomenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenComponent,WomenComponent,OpenImageComponent]
