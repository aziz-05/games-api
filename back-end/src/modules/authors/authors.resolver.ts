import { Args, Field, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from '@prisma/client';
import { ReviewsService } from '../reviews/reviews.service';


@Resolver("Author")
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService, private reviewsService: ReviewsService) {}

  @Query()
  authors() {
    return this.authorsService.authors();
  }

  @Query()
  author(@Args('id') id: number) {
    return this.authorsService.author(id);
  }


  @Mutation()
  addAuthor(@Args('author') author: any) {
    return this.authorsService.addAuthor(author);
  }

  
  @ResolveField()
  async reviews(@Parent() author: Author) {
    let { id } = author;
    console.log("here");
    
    return await this.reviewsService.findAll(id, false)
  }

  
    
}
