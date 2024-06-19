import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectAvatarFeature = createFeatureSelector<string>('avatar');

export const selectAvatar = createSelector(
  selectAvatarFeature,
  (avatarState) => avatarState
)