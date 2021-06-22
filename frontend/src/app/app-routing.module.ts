import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { IposComponent } from './components/ipos/ipos.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { StockExchangesComponent } from './components/stock-exchanges/stock-exchanges.component';
import { HomeComponent } from './components/home/home.component';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { CreateStockExchangeComponent } from './components/stock-exchanges/create-stock-exchange/create-stock-exchange.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  {path:'',component:LoginButtonComponent},
  {path:'home',component:LandingComponent},
  //{path: 'home', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent, canActivate:[AuthGuard]},
  {path: 'ipos', component: IposComponent, canActivate:[AuthGuard]},
  {path: 'sectors', component: SectorsComponent,canActivate:[AuthGuard]},
  {path: 'stock-exchanges', component: StockExchangesComponent,canActivate:[AuthGuard]},
  {path: 'import-data', component: ImportDataComponent,canActivate:[AuthGuard]},
  {path: 'comparison-charts', component: ComparisonChartsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'create-company',component:CreateCompanyComponent,canActivate:[AuthGuard]},
  {path:'create-sector', component:CreateSectorComponent,canActivate:[AuthGuard]},
  {path:'create-stock-exchange', component:CreateStockExchangeComponent,canActivate:[AuthGuard]},
  {path:'create-ipo', component:CreateIpoComponent,canActivate:[AuthGuard]}
];


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
