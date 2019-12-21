import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('Samosa','a small triangular pastry filled with vegetables','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI6V4nm1m-MWrmN-c3otJz7tJWOBAb5d-qJhJ9N-SPAsiGnMKww'),
  new Recipe('Chana masala','Chickpeas of the Chana type in tomato based sauce.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCd1gUJdN394MXDyTkpM7A-8MKNY7uV4Bix83BDIz3zzEb2YFVw'),
  new Recipe('Poha-jalebi','Indori poha jalebi.','https://thumbs.dreamstime.com/z/north-indian-vegan-breakfast-poha-jalebi-poha-jalebi-125773393.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}
