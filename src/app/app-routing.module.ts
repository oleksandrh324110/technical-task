import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { ManageComponent } from "./pages/manage/manage.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', component: ListComponent },
  { path: 'manage', component: ManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
