import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.sass']
})
export class CursorComponent implements OnInit {

  constructor() { }

  @ViewChild('cursor') div: any;

  ngOnInit(): void {
	  const cursor = document.querySelector('.cursor');
	  document.addEventListener('mousemove', e => {
		  cursor?.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
	  })
	  document.addEventListener('click', () => {
		  cursor?.classList.add("expand");

		  setTimeout(() => {
			  cursor?.classList.remove("expand");
		  }, 500)
	  })
/*	  const cursor = document.querySelector('.cursor');
	  document.addEventListener('mousemove', e => {
		  console.log("test");

		  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
	  })

	  document.addEventListener('click', () => {
		  console.log("yes");
		  cursor.classList.add("expand");

		  setTimeout(() => {
			  cursor.classList.remove("expand");
		  }, 500)
	  })*/
  }

}
