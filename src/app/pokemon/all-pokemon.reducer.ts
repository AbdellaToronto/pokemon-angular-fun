import { Action, createReducer, on } from '@ngrx/store';
import {setPokemonList} from "./pokemon.actions";


export const allPokemonFeatureKey = 'allPokemon';

export type AllPokemonState =  {name: string; url: string;}[];

export const initialState: AllPokemonState = [];

export const allPokemonReducer = createReducer(
  initialState,
  on(setPokemonList, (state, action) => action.pokemon)
);

