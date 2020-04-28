import * as fromPokemon from './pokemon.actions';
import {REQUEST_POKEMON} from "./pokemon.actions";

describe('RequestPokemon', () => {
  it('should return an action', () => {
    expect(fromPokemon.requestPokemon({ startingID: 1, count: 151 }).type).toBe(REQUEST_POKEMON);
  });
});
