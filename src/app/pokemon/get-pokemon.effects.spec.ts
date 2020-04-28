import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetPokemonEffects } from './get-pokemon.effects';

describe('GetPokemonEffects', () => {
  let actions$: Observable<any>;
  let effects: GetPokemonEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetPokemonEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GetPokemonEffects>(GetPokemonEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
