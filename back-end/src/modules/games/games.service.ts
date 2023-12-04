import { Injectable } from '@nestjs/common';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService){}
  

  games() {
    return this.prisma.game.findMany();
    
  }

   game(id: number) {
    id = Number(id);
     return this.prisma.game.findUnique({ where: { id: id } });
    
  }


  async findAll(id: number) {
    return await this.prisma.game.findUnique({ 
      where: {
       id
  }
})

}

   async addGame(AddGameInput: any) {
    /*
    let theGame = {
      ...game, 
      id: Math.floor(Math.random() * 10000).toString()
    }
    db.games.push(theGame)
*/

    
    return  await this.prisma.game.create({
      data :{ ...AddGameInput},
    });
  }

  async deleteGame(id: number) {
    //db.games = db.games.filter((g) => g.id !== id.toString())
    id = Number(id);
    
    return await this.prisma.game.deleteMany({where: {id}});
  }

  async updateGame(id: number, EditGameInput: any) {
    /*
    db.games = db.games.map((g) => {
      if (g.id === id.toString()) {
        return {...g, ... EditGameInput}
      }
      return g
    })
    return db.games.find((g) => g.id === id.toString())
    */
    id = Number(id);
    return await this.prisma.game.update({data :{...EditGameInput}, where: {id}});

  }
  

 
}
