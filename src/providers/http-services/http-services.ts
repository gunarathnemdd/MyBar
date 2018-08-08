import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServicesProvider {

  public host = 'https://greenic.000webhostapp.com/myBar';

  constructor(public http: HttpClient) {
  }

  getPrice(brand, quentity) {
    return this.http.get(this.host + '/getPrice.php?brand=' + brand + '&quentity=' + quentity);
  }

  getQuentity(brand) {
    return this.http.get(this.host + '/getQuentity.php?brand=' + brand);
  }

  getRecipe(brand) {
    return this.http.get(this.host + '/getRecipe.php?brand=' + brand);
  }

}
