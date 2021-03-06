import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DataTableModule } from 'angular5-data-table';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DisplayBooksInfoComponent } from './display-books-info/display-books-info.component';
import { ClientInputFormComponent } from './client-input-form/client-input-form.component';
import { DisplayClientsInfoComponent } from './display-clients-info/display-clients-info.component';
import { CategoryInputFormComponent } from './category-input-form/category-input-form.component';
import { DisplayCategoryInfosComponent } from './display-category-infos/display-category-infos.component';
import { BillingComponent } from './billing/billing.component';
import { AppReportComponent } from './app-report/app-report.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { SearchClientReportComponent } from './search-client-report/search-client-report.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BookDetailsComponent } from './book-details/book-details.component';

import {MatSnackBarModule} from '@angular/material/snack-bar'; 
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    WebviewDirective,
    BookInfoComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DisplayBooksInfoComponent,
    ClientInputFormComponent,
    DisplayClientsInfoComponent,
    CategoryInputFormComponent,
    DisplayCategoryInfosComponent,
    BillingComponent,
    AppReportComponent,
    AppDashboardComponent,
    SearchClientReportComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    DataTableModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'h',
       component: HomeComponent ,
        
      },
      {
        path: 'dashboard',
      component: AppDashboardComponent ,
       
       },
      {
        path: 'BookEntry',
      component: BookInfoComponent ,
       
     },
     {
      path: 'BookEntry/:id',
    component: BookInfoComponent ,
     
   },
   {
    path: 'bookDetails/:id',
  component: BookDetailsComponent ,
   
 },
     {
      path: 'displayBooksInfo',
    component: DisplayBooksInfoComponent ,
     
      },
      {
        path: 'categoryInputForm',
      component: CategoryInputFormComponent ,
       
        },
        {
          path: 'categoryInputForm/:id',
        component: CategoryInputFormComponent ,
         
          },
        {
          path: 'displayCategoryInfo',
        component: DisplayCategoryInfosComponent ,
         
         },

         {
          path: 'clientInputForm',
        component: ClientInputFormComponent ,
         
         },
         {
          path: 'clientInputForm/:id',
        component: ClientInputFormComponent ,
         
         },
         {
          path: 'displayClientsInfos',
        component: DisplayClientsInfoComponent ,
         
         },
         {
          path: 'billing',
        component: BillingComponent ,
         
         },
         {
          path: 'ReportDetails/:billNo',
        component: AppReportComponent ,
         
         },
         {
          path: 'SearchClientReport',
          component: SearchClientReportComponent ,
         
         }
         
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
