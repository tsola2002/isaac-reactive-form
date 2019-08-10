import { RouterModule, Routes}  from '@angular/router';

//component
import {FormComponent} from './form/form.component';
import {NgModule} from '@angular/core';



//routes
const routes:Routes = [
    {path: '', component:FormComponent},
    {path:'form', component:FormComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}