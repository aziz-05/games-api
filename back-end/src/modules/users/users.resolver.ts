import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation()
  addUser(@Args('user') user: any) {
    return this.usersService.addUser(user);
  }

  @Query()
  users() {
    return this.usersService.users();
  }

  @Query()
  user(@Args('id') id: number, @Args('email') email: string) {
    return this.usersService.user(id, email);
  }

  @Mutation()
  updateUser(@Args('id')id :  number, @Args('edits') edits: any) {
    return this.usersService.updateUser(id, edits);
  }

  @Mutation()
  deleteUser(@Args('id') id: number, @Args('name') name: string) {
    return this.usersService.deleteUser(id, name);
  }
}
