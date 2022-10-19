import { Component, OnInit } from '@angular/core';

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

	constructor() {
	}

	ngOnInit(): void {
	}

	handleFileInput(e: Event) {
		const startTime = performance.now();
		const target = <HTMLInputElement>e.target;
		if (target.files) {
			this.fileToUpload = target.files[0];
			console.log(this.fileToUpload);
			const reader = new FileReader();
			reader.readAsText(this.fileToUpload);
			reader.addEventListener('load', () => {
				this.rawString = reader.result;
				if (typeof this.rawString === 'string') {
					this.lines = [[]];
					this.headers = [];
					let allTextLines = this.rawString.split(/\r\n|\n/)
					this.headers = allTextLines[0].split(',');

					let last = 0

					for (let i = 1; i < allTextLines.length; i++) {
						let first = allTextLines[i].indexOf('"', last);
						let second = allTextLines[i].indexOf('"', first+1);
						let data = [allTextLines[i].substring(first+1, second).replaceAll(",", " ")]

						console.log(first);
						console.log(second);
						console.log(data);

						last = second
						if (data.length == this.headers.length) {
							let line: { [key: string]: string } = {};
							for (let j = 0; j < this.headers.length; j++) {
								line = { ...line, [this.headers[j]]: data[j] };
							}
							this.lines.push(line);
						}
					}
					console.log(this.headers); //The data headers.
					console.log(this.lines); //The data in the form of 2 dimensional array.
				}
			}, false);
		}
		const endTime = performance.now();
		console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
	}
}
