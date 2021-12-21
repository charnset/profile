import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  getPaperPDF(path: string): void {
    window.open(path, "_blank");
  }

  getPaperCite(path: string): void {
    window.open(path, "_blank");
  }
}
