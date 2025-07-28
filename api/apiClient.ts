import * as supertest from "supertest";
import config from '../config/base.config';

export const brandsRequest = supertest(config.baseURL);

export const pocRequest = supertest("https://jsonplaceholder.typicode.com/");
