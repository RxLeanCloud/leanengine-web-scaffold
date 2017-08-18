import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material-components';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MdIconRegistry, } from "@angular/material";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { AppRoutingModule } from './app-routing';

enableProdMode();
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { PostService } from './post.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MarkdownToHtmlModule.forRoot(),
  ],
  providers: [MdIconRegistry, Title, PostService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
