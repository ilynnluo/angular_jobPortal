import { state } from "@angular/animations";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectAvatar = createFeatureSelector('avatar')

// export const selectAvatarSelector = createSelector(
//   selectAvatar,
//   (state: any) => state.avatar
// )

console.log('avatarSelectors')