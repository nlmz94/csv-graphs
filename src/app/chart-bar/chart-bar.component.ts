import { Component, OnInit } from '@angular/core';

const productSales = [
	{
		"name": "book",
		"value": 2220
	},
	{
		"name": "pc",
		"value": 5122
	},
	{
		"name": "games",
		"value": 9456
	},
]

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.sass']
})

export class ChartBarComponent implements OnInit {

	productSales: any[]
	constructor() { this.productSales=productSales }

	ngOnInit(): void {
	}

}
