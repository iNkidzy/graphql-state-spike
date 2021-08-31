import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

type Post = {
  id: 1;
  author: string;
  title: string;
  body: string;
}
@Component({
  selector: 'graphql-state-spike-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  readonly form = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(private fb: FormBuilder){}
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onSubmit(){
    console.log
  }

}
