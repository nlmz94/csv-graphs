import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CsvService } from '../shared/csv.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	fileToUpload: File | null = null;
	public headers: string[] | undefined;
	public lines: object[] | undefined;
	private rawString: string | ArrayBuffer | null | undefined;
	public separator: string | undefined;

	constructor(private router: Router, private csvService: CsvService) {
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.csvService.headers = this.headers;
		this.csvService.lines = this.lines;
	}

	handleFileInput(e: Event) {

		function csvToArray(str:string, delimiter:string) {
			const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

			const rows = str.slice(str.indexOf("\n") + 1).split("\n");
			const arr = rows.map(function (row:string) {
				const test = row.replace(/,(?=[^"]*"[^"]*(?:"[^"]*"[^"]*)*$)/g, '')
				if (row.indexOf('"') > 0) {
					console.log("test")
				}
				const values = test.split(delimiter);
				const el = headers.reduce(function (object:any, header:string, index:number) {
				object[header] = values[index];
				return object;
			}, {});
			return el;
		});

			console.log(arr);
			return arr;
		}

		const target = <HTMLInputElement>e.target;
		if (target.files) {
			this.fileToUpload = target.files[0];
			console.log(this.fileToUpload);
			const reader = new FileReader();
			reader.readAsText(this.fileToUpload);
			reader.addEventListener('load', () => {
				this.rawString = reader.result;
				if (typeof this.rawString === 'string')
					csvToArray(this.rawString, ",")
				// this.lines.push(line);
				// this.router.navigate(['/dashboard']).then();
			}, false);
		}
	}

}
