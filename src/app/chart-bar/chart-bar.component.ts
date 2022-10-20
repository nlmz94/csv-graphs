import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.sass']
})
export class ChartBarComponent implements OnInit {

  constructor() { }

	ngOnInit(): void {
		const ctx = document.getElementById("myCharts")
		// const myCharts = new Chart(ctx,{})
  }

}
