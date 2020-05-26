import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
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
        path: 'gallery',
        component: GalleryComponent
      }, {
        path: 'accomplishments',
        component: AccomplishmentsComponent
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
