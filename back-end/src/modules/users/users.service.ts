import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  users() {
    return this.prisma.user.findMany();
  }

  user(id: number, email: string) {
    id = Number(id);
    return this.prisma.user.findFirst({
      where: { OR: [{ id: id }, { email: email }] },
    });
  }

  async addUser(AddUserInput: any) {
    try {
    return await this.prisma.user.create({
      data: { ...AddUserInput },
    }); 
    } catch (e) {
      return e
    }
  }

  async updateUser(id: number, EditUserInput: any) {
    id = Number(id);
    return await this.prisma.user.update({
      data: { ...EditUserInput },
      where: { id },
    });
  }

  async deleteUser(id: number, name: string) {
    id = Number(id);
    return await this.prisma.user.deleteMany({
      where: {
        OR: [{ id }, { name }],
      },
    });
  }
}
