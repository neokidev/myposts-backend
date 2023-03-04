import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => Boolean, { nullable: false })
  published!: boolean;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date | string;
}
