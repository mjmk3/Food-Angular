import {Component, OnInit} from '@angular/core';
import {Food} from "../../share/model/Food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../services/food/food.service";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
              private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
