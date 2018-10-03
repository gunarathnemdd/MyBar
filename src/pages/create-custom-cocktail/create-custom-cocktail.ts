import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { forEach } from 'lodash';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-create-custom-cocktail',
  templateUrl: 'create-custom-cocktail.html',
})
export class CreateCustomCocktailPage {

  private form: FormGroup;
  public liqureTypeOptions: any;
  public ingredientDetails: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    private _FB: FormBuilder) {
    this.form = this._FB.group({
      user_name: ['', Validators.required],
      user_email: ['', Validators.required],
      cocktail_name: ['', Validators.required],
      liqure_types: ['', Validators.required],
      preparation_method: ['', Validators.required],
      specially_for: [''],
      ingredients: this._FB.array([
        this.initTechnologyFields()
      ])
    });

    this.liqureTypeOptions = {
      title: 'Liqure Types'
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCustomCocktailPage');
  }

  initTechnologyFields(): FormGroup {
    return this._FB.group({
      ingredients_name: ['', Validators.required],
      ingredients_quantity: ['', Validators.required],
      ingredients_metric: ['', Validators.required],
      is_ingredient: ['', Validators.required],
      is_optional: ['false']
    });
  }

  addNewInputField() {
    const control = <FormArray>this.form.controls.ingredients;
    control.push(this.initTechnologyFields());
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.ingredients;
    control.removeAt(i);
  }

  createCocktail() {
    this.ingredientDetails = "";
    if (this.form.valid) {
      let user_name = this.form.value['user_name'];
      let user_email = this.form.value['user_email'];
      let cocktail_name = this.form.value['cocktail_name'];
      let liqure_types = this.form.value['liqure_types'];
      let preparation_method = this.form.value['preparation_method'];
      let ingredients = this.form.value['ingredients'];
      let specially_for = this.form.value['specially_for'];
      forEach(ingredients, (value) => {
        let ingredientDetails = value['ingredients_quantity'] + value['ingredients_metric'] + " " + value['ingredients_name'] + "(" + value['is_ingredient'] + " " + value['is_optional'] + ")";
        this.ingredientDetails = this.ingredientDetails.concat(", ", ingredientDetails);
      });
      this.ingredientDetails = this.ingredientDetails.substring(2);
      this.service.createCocktails(user_name, user_email, cocktail_name, liqure_types, preparation_method, this.ingredientDetails, specially_for).subscribe(data => {
        if (data['response'] == 'success') {
          this.form.reset()
          let message = "Thanks for your contribution. We'll review the recipe and let you know later.";
          this.toastService.toastCtrlr(message);
        }
        else {
          let message = "Network error! Please check your internet connection.";
          this.toastService.toastCtrlr(message);
        }
      },
        (err) => {
          let message = "Network error! Please check your internet connection. 2";
          this.toastService.toastCtrlr(message);
        });
    }
    else {
      console.log(this.form.valid);
    }
  }

}
