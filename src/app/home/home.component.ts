import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	fileToUpload: File | null = null;

	constructor() {
	}

	ngOnInit(): void {
	}

	handleFileInput(e: Event) {
		const target = <HTMLInputElement>e.target;
		if (target.files) {
			this.fileToUpload = target.files[0];
			console.log(this.fileToUpload);
			const reader = new FileReader();
			reader.readAsText(this.fileToUpload);
			reader.onload = function(event){
				if (event.target !== null && event.target.result !== null) {
					const csvData = event.target.result; // Content of CSV file
					if (typeof csvData === 'string') {
						let allTextLines = csvData.split(/\r\n|\n/);
						let headers = allTextLines[0].split(',');
						let lines = [];
						for ( let i = 0; i < allTextLines.length; i++) {
							let data = allTextLines[i].split(',');
							if (data.length == headers.length) {
								let line = [];
								for ( let j = 0; j < headers.length; j++) {
									line.push(data[j]);
								}
								lines.push(line);
							}
						}
						console.log(lines); //The data in the form of 2 dimensional array.
					}
				}
			}
		}
	}
}
