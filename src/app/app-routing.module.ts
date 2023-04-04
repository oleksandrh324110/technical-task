import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from './pages/list/list.component'
import { ManageComponent } from './pages/manage/manage.component'
import { CreateComponent } from './pages/create/create.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', component: ListComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'create', component: CreateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
