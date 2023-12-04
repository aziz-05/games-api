import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Game, Review } from '@prisma/client';
import { GamesService } from '../games/games.service';
import { AuthorsService } from '../authors/authors.service';

@Resolver('Review')
export class ReviewsResolver {
  
  constructor(private reviewsService: ReviewsService, private gamesService: GamesService, private authorsService: AuthorsService) {}

  @Query()
  reviews() {
    return this.reviewsService.reviews();
  }

  @Query()
  review(@Args('id') id: number) {
    return this.reviewsService.review(id);
  }



  @Mutation()
  addReview(@Args('review') review: any) {
    return this.reviewsService.addReview(review);
  }

  
  @ResolveField()
  async game(@Parent() review: Review) {
    let { gameId } = review;
    return await this.gamesService.findAll(gameId)
  }
  
  
  @ResolveField()
  async author(@Parent() review: Review) {
    let { authorId } = review;
    return await this.authorsService.findAll(authorId)
  }
  
}