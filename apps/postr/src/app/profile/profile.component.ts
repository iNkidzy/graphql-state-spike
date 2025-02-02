import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileWithPostsGQL } from '@graphql-state-spike/data-access';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'postr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  readonly profile$ = this.route.data.pipe(
    switchMap(({ id }) =>
      this.profileQuery
        .watch({ id })
        .valueChanges.pipe(map((result) => result.data.profile))
    )
  );

  constructor(
    private route: ActivatedRoute,
    private profileQuery: ProfileWithPostsGQL
  ) {}
}
