import * as dataGenerator from '../../testData/dataGenerator';
import { brandsRequest } from '../../api/apiClient';

export async function createCategory(token: string) {
    const body = {
        "name": dataGenerator.categoryUniqueName()
      };
      const response = await brandsRequest
      .post("/categories")
      .send(body)
      .set('Authorization', `Bearer ${token}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe(body.name);
      return response.body;
}

export async function deleteCategory (id: string, token: string) {
    const response = await brandsRequest
    .del(`/categories/${id}`)
    .set('Authorization', `Bearer ${token}`);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toContain(id);
}