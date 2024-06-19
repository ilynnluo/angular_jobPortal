import { createReducer, on } from "@ngrx/store";
import { avatarActions } from "./avatar.action";

export const initialState: any = '';
    

export const avatarReducer = createReducer(
  initialState,
  on(avatarActions.getAvatar, (_state, { avatar }) => {
    console.log('avatar in reducer', avatar)
    return avatar
  })
)