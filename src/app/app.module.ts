import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CsvService } from './shared/csv.service';
import { TableComponent } from './table/table.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
  	TableComponent,
    ChartBarComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
	],
  providers: [
	  CsvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
