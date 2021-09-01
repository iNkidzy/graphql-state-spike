import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPostComponent } from './new-post.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [NewPostComponent],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    it('should invoke addPost mutation ', () => {
      component.form.get('title')?.setValue('Title');
      component.form.get('body')?.setValue('Body');
      component.onSubmit();

    }),
 // }),
 /* describe('Form submit', () => {
    it('should make a new post', () => {
      

    }),
  }), */
//}); 
