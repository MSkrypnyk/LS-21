import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-beans',
  templateUrl: './coffee-beans.component.html',
  styleUrl: './coffee-beans.component.scss'
})
export class CoffeeBeansComponent {

  public coffeeData = [
    {
      image: 'assets/img/home/beans1.png',
      title: 'Robusta Beans',
      desc: 'Medium Roasted',
      id: 1,
    },
    {
      image: 'assets/img/home/beans2.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 2,
    },
    {
      image: 'assets/img/home/beans3.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 3,
    },
    {
      image: 'assets/img/home/beans4.png',
      title: 'Cappuccino',
      desc: 'With Steamed Milk',
      id: 4,
    },
  ]
 public price: number = 4.20; 
}
