import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {allPokemonReducer, AllPokemonState} from "../pokemon/all-pokemon.reducer";


export interface State {
  pokemonList: AllPokemonState
}

export const reducers: ActionReducerMap<State> = {
  pokemonList: allPokemonReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
