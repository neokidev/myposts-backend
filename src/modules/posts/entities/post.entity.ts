import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: false })
  published!: boolean;

  @Field(() => Date, { nullable: true })
  publishedAt!: Date | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
