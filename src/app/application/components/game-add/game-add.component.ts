import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../model/category';


@Component({
  selector: 'app-game-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './game-add.component.html',
  styleUrl: './game-add.component.css'
})
export class GameAddComponent  {

  categories = Object.values(Category);

  gameForm:FormGroup=new FormGroup(
    { id : new FormControl(1),
    name:new FormControl(''),
    price: new FormControl(46.3),
    madeIn:new FormControl('Tunisie'),
    category:new FormControl(Category.BoardGames),
    isNew:new FormControl(true)
   });

   onSubmit(){
    console.log(this.gameForm.value);
    console.log(this.gameForm.get('name')?.value);
    console.log(this.gameForm.controls['price'].value);
    console.log(this.gameForm.value['category']);
    console.log(this.gameForm.value.madeIn);
   }
   
}
