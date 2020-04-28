import { createAction, props } from "@ngrx/store";


export const REQUEST_POKEMON = '[Pokemon] Request Pokemon';

export const requestPokemon = createAction(
  REQUEST_POKEMON,
  props<{startingID: number, count: number}>()
);
