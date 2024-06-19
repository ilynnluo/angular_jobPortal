import { createAction, props } from "@ngrx/store";

export const loadAvatar = createAction('loadAvatar', props<{ avatar: string }>());
export const loadAvatarInit = createAction('loadAvatarInit');