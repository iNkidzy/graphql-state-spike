import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostGQL } from '@graphql-state-spike/data-access';

@Component({
  selector: 'graphql-state-spike-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent {
  readonly form = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private newPostMutation: AddPostGQL
  ) {}

  async onSubmit() {
    console.log('clicked');
    const { title, body } = this.form.value;
    {
      title;
      body;
    }
    const result = await this.newPostMutation
      .mutate({ authorId: 1, body, title })
      .toPromise();

    const id = result.data?.addPost?.id;
    this.router.navigateByUrl('/posts/' + id);
  }
}
