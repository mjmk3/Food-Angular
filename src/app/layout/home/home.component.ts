import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../services/food/food.service";
import { Food } from "../../share/model/Food";
import { StarRatingComponent } from "ng-starrating";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[]= [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = foodService.getAll();
    })

  }

  ngOnInit(): void{
  }
}
