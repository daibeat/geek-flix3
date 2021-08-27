import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {

  suggestSearch() {
    const suggestSearch = 'Movie Search';
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}



