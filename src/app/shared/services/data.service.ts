import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public users$ = new BehaviorSubject<User[]>([]);
  constructor(
    // private readonly userService: UserService,
  ) { }

  public initData() {
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /* WEAPON_PAINT *-/
  private async initUsers() {
    return this.weaponPaintService.getWeaponPaints()
      .then(weaponPaints => this.weaponPaints$.next(weaponPaints))
      .catch(console.error);
  }

  private async initWeaponPaintsPaged(pageSize?: number) {
    let offset = 0;
    let finished = false;

    while (!finished) {
      const weaponPaintPage = await this.weaponPaintService.getWeaponPaintsPaged({limit: pageSize, offset})
        .catch(console.error);

      if (!weaponPaintPage) {
        return;
      }

      finished = weaponPaintPage.finished === true;
      offset += weaponPaintPage.limit ?? 1;

      const currentVal = this.weaponPaints$.getValue();
      const addedVal = weaponPaintPage.items ?? [];
      this.weaponPaints$.next([...currentVal, ...addedVal]);
    }
  }
  */

}
