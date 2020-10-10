import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVarComponent } from './components/add-var/add-var.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [{
  path:"",
  component:AddComponent
},
{
  path:"add-simple",
  component:AddComponent
},
{
  path:"edit",
  component:EditComponent
},
{
  path:"list",
  component:ListComponent
},
{
  path:"add-variable",
  component:AddVarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
