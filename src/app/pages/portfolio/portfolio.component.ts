import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private Route : Router) { }

  ngOnInit(): void {
  }
  navigate(link : string){
    let endpoint= 'https://' + link
    window.open(endpoint )
  }

}
