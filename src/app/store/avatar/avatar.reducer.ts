import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

console.log('avatarReducer')

// export const initialState: any = '';

// export const avatarReducer = createReducer(
//   initialState,
//   on(avatarActions.getAvatar, (_state, { avatar }) => {
//     console.log('avatar in reducer', avatar)
//     return avatar
//   })
// )

export const adapter: EntityAdapter<string> = createEntityAdapter<string>();