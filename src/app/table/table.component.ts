import { Component, Input, OnInit } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
	selector: 'table-component',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.sass'],
})

export class TableComponent implements OnInit {
	constructor() {
	}

	ngOnInit(): void {
	}

	@Input() headers: any;
	@Input() lines: any;
}
