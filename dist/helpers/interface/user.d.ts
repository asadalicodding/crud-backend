/// <reference types="mongoose/types/document" />
import { Document } from 'mongoose';
export interface IUser extends Document {
    readonly userName: string;
    readonly email: string;
    readonly password: string;
}
