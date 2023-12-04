import { Injectable } from '@nestjs/common';
import db from './_db';
import { log } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { ID } from '@nestjs/graphql';

@Injectable()
export class AuthorsService {
      constructor(private prisma: PrismaService){}
      authors() {
        //return this.prisma.author.findMany({ include: { reviews: { include: { author: true, game: true } } } });
        return this.prisma.author.findMany();
      }

      author(id: number) {
        id = Number(id);
        //return this.prisma.author.findUnique({where : {id}, include: {reviews: {include:{author: true, game: true} }}})
        return this.prisma.author.findUnique({ where: { id } })
        
      }


      async findAll(id: number) {
        return await this.prisma.author.findUnique({ 
          where: {
          id
      }
    })

  }

      async addAuthor(AddAuthorInput: any) {
        /*
        let theGame = {
          ...game, 
          id: Math.floor(Math.random() * 10000).toString()
        }
        db.games.push(theGame)
  */

        
        return  await this.prisma.author.create({
          data :{ ...AddAuthorInput},
        });
      }





      
     
    }