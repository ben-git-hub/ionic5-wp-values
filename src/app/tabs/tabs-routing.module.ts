import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../quotes/quotes.module').then(m => m.QuotesPageModule)
          }
        ]
      },
      {
        path: 'quotes/edit-quote',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../edit-quote/edit-quote.module').then(m => m.EditQuotePageModule)
          }
        ]
      },
      {
        path: 'quotes/:id/edit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../edit-quote/edit-quote.module').then(m => m.EditQuotePageModule)
          }
        ]
      },
      {
        path: 'quotes/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../quote-details/quote-details.module').then(m => m.QuoteDetailsPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/quotes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/quotes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
