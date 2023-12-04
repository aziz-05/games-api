import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Review } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService){}

  reviews() {
    return this.prisma.review.findMany();
  }

  review(id: number) {
    id = Number(id);
    return this.prisma.review.findUnique({ where: { id } });
  }

   async findAll(id: number, game) 
   {
     if (game) {
      return await this.prisma.review.findMany({
         where: {
           gameId: id,
         }
       });
     } else {       
      return await this.prisma.review.findMany({
         where: {
           authorId: id,
         }
       });
     }
     
     
   }


  async addReview(AddReviewInput: any) {
    /*
    let theGame = {
      ...game, 
      id: Math.floor(Math.random() * 10000).toString()
    }
    db.games.push(theGame)
*/
   
   
    return  await this.prisma.review.create({
      data :{ ...AddReviewInput }
    });
  }

  
  

 
}

