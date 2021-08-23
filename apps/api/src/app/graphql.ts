
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
    __typename?: 'Post';
    id: number;
    author: Profile;
    title: string;
    body?: Nullable<string>;
}

export interface IQuery {
    __typename?: 'IQuery';
    posts(): Post[] | Promise<Post[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    postsByAuthor(authorId: number): Post[] | Promise<Post[]>;
    profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    addPost(authorId: number, title: string, body?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;
    updatePost(id: number, title?: Nullable<string>, body?: Nullable<string>): Nullable<Post> | Promise<Nullable<Post>>;
    updateProfile(id: number, firstName: string, lastName: string): Nullable<Profile> | Promise<Nullable<Profile>>;
}

export interface Profile {
    __typename?: 'Profile';
    id: number;
    firstName: string;
    lastName: string;
    posts: Post[];
}

type Nullable<T> = T | null;
