import { brandsRequest } from '../../api/apiClient';
import * as methods from '../../api/categories/methods';
import * as baseTest from '../baseTest';

let category;

beforeAll(async()=>{
    category = await methods.createCategory(baseTest.token);
});

afterAll(async()=>{
    await methods.deleteCategory(category._id, baseTest.token);
});

test('PUT/categories{id}',async()=>{
    const body = {
        "name": category.name + ' changed'
    };
   const id = category._id;
   const response = await brandsRequest
   .put(`/categories/${id}`)
   .send(body)
   .set('Authorization', `Bearer ${baseTest.token}`);
   expect(response.statusCode).toBe(200);
   expect(response.body.name).toEqual(body.name);
   expect(response.body.name).not.toEqual(category.name);
});