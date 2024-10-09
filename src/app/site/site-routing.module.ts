import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { PosComponent } from './pages/products/pos/pos.component';
import { RetailComponent } from './pages/products/retail/retail.component';

 const routes: Routes = [
  {
    path: '', component: SiteComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Homepage' },
      { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
      {
        path: 'products', component: ProductsComponent, title: 'Our Products', children: [
          { path: '', redirectTo: 'pos', pathMatch: 'full' },
          { path: 'pos', component: PosComponent, title: 'Our Products - POS' },
          { path: 'retail', component: RetailComponent, title: 'Our Products - Retail' },
        ]
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
