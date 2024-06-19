import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import {EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AvatarService } from "src/services/avatar.service";
import * as AvatarActions from "./avatar.action";

@Injectable()
export class AvatarEffects {
  loadAvatar$ = createEffect(() => this.actions$.pipe(
    ofType(AvatarActions.loadAvatarInit),
    mergeMap(() => this.avatarService.getUsername()
      .pipe(
        map(avatar => AvatarActions.loadAvatar({ avatar })),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private avatarService: AvatarService
  ){}
}

