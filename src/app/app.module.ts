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
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
		NgxChartsModule
	],
  providers: [
	  CsvService,
	  {
		  provide: MAT_RADIO_DEFAULT_OPTIONS,
		  useValue: { color: 'accent' },
	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
