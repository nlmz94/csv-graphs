import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CsvService } from '../shared/csv.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
	public headers: string[] | undefined;
	public lines: object[] | undefined;

	constructor(private router: Router, private csvService: CsvService) {
		this.headers = this.csvService.headers;
		this.lines = this.csvService.lines;
	}

	ngOnInit(): void {
	}
}
