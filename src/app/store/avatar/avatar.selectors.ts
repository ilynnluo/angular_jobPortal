import { createSelector, createFeatureSelector } from "@ngrx/store";
import { adapter, AvatarState } from "./avatar.reducer";

export const selectAvatar = createFeatureSelector<AvatarState>('avatar')

const { selectAll } = adapter.getSelectors();

export const selectAllAvatars = createSelector(selectAvatar, selectAll);