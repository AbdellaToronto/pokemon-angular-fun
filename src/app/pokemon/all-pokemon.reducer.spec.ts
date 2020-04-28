import { allPokemonReducer, initialState } from './all-pokemon.reducer';

describe('AllPokemon Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = allPokemonReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
