import { Injectable } from '@angular/core';

@Injectable()
export class CsvService {
	public headers: string[] | undefined;
	public lines: object[] | undefined;

	constructor() {
	}
}
