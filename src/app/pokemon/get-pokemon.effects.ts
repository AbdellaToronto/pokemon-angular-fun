import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {REQUEST_POKEMON} from "./pokemon.actions";
import {tap} from "rxjs/operators";



@Injectable()
export class GetPokemonEffects {

  retrievePokemon$ = createEffect(() => this.actions$.pipe(
    ofType(REQUEST_POKEMON),
    tap(x => {debugger;}),
  ), { dispatch: false })

  constructor(private actions$: Actions) {}
}
