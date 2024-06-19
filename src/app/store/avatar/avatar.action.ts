import { createAction, props } from "@ngrx/store";

console.log('avatarActions')
export const loadAvatar = createAction('loadAvatar', props<{ avatar: string }>());
export const loadAvatarInit = createAction('loadAvatarInit');