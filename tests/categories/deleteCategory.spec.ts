import { brandsRequest } from '../../api/apiClient';
import * as methods from '../../api/categories/methods';
import * as baseTest from '../baseTest';

let category;

beforeAll(async()=>{
    category = await methods.createCategory(baseTest.token);
});

test('DELETE/categories{id} ',async()=>{
    const id = category._id;
    const response = await brandsRequest
    .del(`/categories/${id}`)
    .set('Authorization', `Bearer ${baseTest.token}`);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toContain(id);
});