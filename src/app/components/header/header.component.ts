import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  scrollToElement(e, element): void {
    console.log(e);
    console.log(document.all[element]);
    e.preventDefault();
    document.all[element].scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
