import * as dotenv from 'dotenv';
dotenv.config();

export  class Variables {
    public static readonly brandsBaseURL : string = 'https://practice-react.sdetunicorns.com/api/test';
    public static adminEmail: string|any = process.env.adminEmail;
    public static adminPassword: string|any = process.env.adminPassword;
}