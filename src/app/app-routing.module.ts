import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/art-house',
  //   pathMatch: 'full'

  // },
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'work',
        component: WorkComponent
      }, {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
