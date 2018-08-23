import { Directive } from '@angular/core';

/**
 * Generated class for the CommentsDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[comments]' // Attribute selector
})
export class CommentsDirective {

  constructor() {
    console.log('Hello CommentsDirective Directive');
  }

}
