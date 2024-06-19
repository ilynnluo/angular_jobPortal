import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AvatarActions from './avatar.action';

export interface AvatarState extends EntityState<string> { }
export const adapter: EntityAdapter<string> = createEntityAdapter<string>();

export const initialState: AvatarState = adapter.getInitialState();

export const avatarReducer = createReducer(
  initialState,
  on(AvatarActions.loadAvatar, (state, { avatar }) => {
    console.log('avatar in reducer', avatar)
    return adapter.addOne(avatar, state);
  })
)