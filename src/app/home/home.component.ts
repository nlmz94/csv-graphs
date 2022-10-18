import { Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(<HTMLCanvasElement>canvas);
    app.load('https://prod.spline.design/ZZ6xHiy1V3PnvIoZ/scene.splinecode').then();
  }

}
