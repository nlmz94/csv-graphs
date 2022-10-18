import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	fileToUpload: File | null = null;
	public CSVConstants = {
		tokenDelimeter: ',',
		isHeaderPresentFlag: true,
		validateHeaderAndRecordLengthFlag: true,
		valildateFileExtenstionFlag: true,
	};

	constructor() {
	}

	ngOnInit(): void {
	}

	handleFileInput(e: Event) {
		const target = <HTMLInputElement>e.target;
		if (target.files) {
			this.fileToUpload = target.files[0];
			console.log(this.fileToUpload);
		}
	}
}
