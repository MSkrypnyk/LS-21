import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss'
})
export class CoffeeComponent {
 
  public coffeeData = [
    {
      image: 'assets/img/home/cappuccino1.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 1,
    },
    {
      image: 'assets/img/home/cappuccino2.png',
      title: 'Cappuccino',
      desc: 'With Foam',
      id: 2,
    },
    {
      image: 'assets/img/home/cappuccino3.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 3,
    }
  ]
 public price: number = 4.20; 
}