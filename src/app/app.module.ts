import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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
    DisplayCategoryInfosComponent
  ],
  imports: [
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
        path: 'BookEntry',
      component: BookInfoComponent ,
       
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
          path: 'displayCategoryInfo',
        component: DisplayCategoryInfosComponent ,
         
         },

         {
          path: 'clientInputForm',
        component: ClientInputFormComponent ,
         
         },
         {
          path: 'displayClientsInfos',
        component: DisplayClientsInfoComponent ,
         
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
