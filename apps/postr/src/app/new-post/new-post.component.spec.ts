import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPostComponent } from './new-post.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { AddPostDocument } from '@graphql-state-spike/data-access';

describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;
  let controller: ApolloTestingController;

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

    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    it('should invoke addPost mutation ', () => {
      component.form.get('title')?.setValue('Title');
      component.form.get('body')?.setValue('Body');
      component.onSubmit();

      const op = controller.expectOne(AddPostDocument);
      expect(op.operation.variables).toEqual({
        title: 'Title',
        body: 'Body',
        authorId: 1,
      });
    });
  });

  describe('Form submit', () => {
    it('should make a new post', () => {
      setValue(element<HTMLInputElement>('#titleInput'), 'Title');
      setValue(element<HTMLTextAreaElement>('#bodyInput'), 'Body');
      click(element<HTMLButtonElement>('#submit'));

      const op = controller.expectOne(AddPostDocument);
      expect(op.operation.variables).toEqual({
        title: 'Title',
        body: 'Body',
        authorId: 1,
      });
    });
  });

  function element<T extends HTMLElement>(selector: string) {
    return fixture.nativeElement.querySelector(selector) as T;
  }

  function setValue(elemnt: HTMLElement & { value: any }, value: string) {
    elemnt.value = value;
    elemnt.dispatchEvent(new Event('input'));
  }
  function click(elemnt: HTMLElement) {
    elemnt.dispatchEvent(new Event('click'));
  }
});
