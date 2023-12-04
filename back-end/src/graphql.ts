
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddAuthorInput {
    name: string;
    verified: boolean;
}

export class AddGameInput {
    title: string;
    platform: string[];
    description?: Nullable<string>;
    version?: Nullable<number>;
    publishDay?: Nullable<Date>;
    reviews?: Nullable<AddReviewInput[]>;
    authors?: Nullable<AddAuthorInput[]>;
}

export class EditGameInput {
    title?: Nullable<string>;
    platform?: Nullable<string[]>;
    description?: Nullable<string>;
    version?: Nullable<number>;
    publishDay?: Nullable<Date>;
}

export class AddReviewInput {
    rating: number;
    content: string;
    description?: Nullable<string>;
    authorId: number;
    gameId: number;
}

export class Author {
    id?: Nullable<string>;
    name: string;
    verified: boolean;
    reviews?: Nullable<Review[]>;
    games?: Nullable<Game[]>;
}

export abstract class IQuery {
    abstract authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract games(): Nullable<Nullable<Game>[]> | Promise<Nullable<Nullable<Game>[]>>;

    abstract game(id: string): Nullable<Game> | Promise<Nullable<Game>>;

    abstract reviews(): Nullable<Nullable<Review>[]> | Promise<Nullable<Nullable<Review>[]>>;

    abstract review(id: string): Nullable<Review> | Promise<Nullable<Review>>;
}

export abstract class IMutation {
    abstract addAuthor(author: AddAuthorInput): Nullable<Author> | Promise<Nullable<Author>>;

    abstract addGame(game: AddGameInput): Nullable<Game> | Promise<Nullable<Game>>;

    abstract deleteGame(id: string): Nullable<Game> | Promise<Nullable<Game>>;

    abstract updateGame(id: string, edits?: Nullable<EditGameInput>): Nullable<Game> | Promise<Nullable<Game>>;

    abstract addReview(review: AddReviewInput): Nullable<Review> | Promise<Nullable<Review>>;
}

export class Game {
    id?: Nullable<string>;
    title: string;
    description?: Nullable<string>;
    version?: Nullable<number>;
    publishDay?: Nullable<Date>;
    platform: string[];
    reviews?: Nullable<Review[]>;
    authors?: Nullable<Author[]>;
}

export class Review {
    id?: Nullable<string>;
    rating: number;
    content: string;
    author: Author;
    game: Game;
}

type Nullable<T> = T | null;
