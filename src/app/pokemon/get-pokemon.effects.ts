import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {setPokemonList} from "./pokemon.actions";
import {mergeMap, map} from "rxjs/operators";
import PokeAPI from "pokeapi-typescript";

@Injectable()
export class GetPokemonEffects {

  retrievePokemon$ = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    mergeMap(() => PokeAPI.Pokemon.list(350, 0)),
    map(data => setPokemonList({pokemon: data.results})),
  ))

  constructor(private actions$: Actions) {}
}
