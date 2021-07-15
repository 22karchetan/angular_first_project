import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ParentFeedbackFormComponent } from './parent-feedback-form/parent-feedback-form.component';

const routes: Routes = [
 
  {
    path:' ',
    component:AppComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'about_us',
    component:AboutComponent,
    pathMatch:'full'  
  },
  {
    path:'contact_us',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'parent_feedback',
    component:ParentFeedbackFormComponent,
    pathMatch:'full'
  },
  {
    path:'download',
    component:DownloadComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
