import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-city-row]',
  templateUrl: './city-row.component.html',
  styleUrls: ['./city-row.component.scss']
})
export class CityRowComponent implements OnInit {

  @Input() name : string = "Rouen";
  @Input() visited: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
