import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'untitled';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
  ) {
    matIconRegistry.addSvgIcon(
      'mail',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/envelope.svg')
    );
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
  }

  ngOnInit(): void {
    // AOS.init();
  }
}
