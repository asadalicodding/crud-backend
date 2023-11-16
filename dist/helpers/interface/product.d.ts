/// <reference types="mongoose/types/document" />
import { Document } from 'mongoose';
export interface IProduct extends Document {
    readonly productId: string;
    readonly name: string;
    readonly company: string;
    readonly unit: string;
    readonly price: string;
}
