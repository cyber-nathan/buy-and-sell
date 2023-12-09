import { Component, Input } from '@angular/core';
import { ITEM } from '../db-data';
import { ProdItem } from '../interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  items = ITEM
  @Input()
  prodItem!: ProdItem



}
