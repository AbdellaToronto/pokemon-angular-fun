import { createAction, props } from "@ngrx/store";


export const REQUEST_POKEMON = '[Pokemon] Request Pokemon';
export const SET_POKEMON_LIST = '[Pokemon] Set Pokemon List';

export const requestPokemon = createAction(
  REQUEST_POKEMON,
  props<{startingID: number, count: number}>()
);

export const setPokemonList = createAction(
  SET_POKEMON_LIST,
  props<{pokemon: {name: string; url: string}[]}>()
);
