import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "./reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pokemonList$ = this.store.pipe(select('pokemonList'));

  constructor(private store: Store<State>) {}
}
