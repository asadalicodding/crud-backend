import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Product {
   @Prop()
   productId: string;
   @Prop()
   name: string;
   @Prop()
   company: string;
   @Prop()
   unit: string;
   @Prop()
   price: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);