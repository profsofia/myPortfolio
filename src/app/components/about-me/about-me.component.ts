import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aboutText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores commodi suscipit in. Nostrum voluptates ad neque iusto earum reprehenderit, libero eveniet impedit quasi dignissimos excepturi quisquam sapiente aperiam incidunt asperiores esse minima fuga corrupti harum unde possimus dolores saepe ducimus commodi! Hic voluptates quos fuga, deserunt eos est earum?`;
}
