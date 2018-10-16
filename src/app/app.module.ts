import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableListComponent } from './table-list/table-list.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { XmlDataService } from './xml-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableListComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    XmlDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
