import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arr = [{name: 'Nike ', price: '10 000'}, {name: 'Adidas ', price: '12 000'}, {name: 'Reebok ', price: '9 000'},]
  constructor() {
  }

}
