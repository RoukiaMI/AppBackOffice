import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { console.log("TOTIITIII") }

  ngOnInit(): void {
  }

  hometest() {
    console.log("Homeeeeee")
  }
}

