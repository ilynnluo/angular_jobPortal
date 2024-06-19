import { createActionGroup, props } from "@ngrx/store";

export const avatarActions = createActionGroup({
  source: 'Avatar',
  events: {
    'Get Avatar': props<{ avatar: any }>(),
  }
})