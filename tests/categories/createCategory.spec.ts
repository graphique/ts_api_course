import { brandsRequest } from '../../api/apiClient';
import * as dataGenerator from '../../testData/dataGenerator';
import * as baseTest from '../baseTest';

test('POST /categories', async()=>{
      const body = {
        "name": dataGenerator.categoryUniqueName()
      };
      const response = await brandsRequest
      .post("/categories")
      .send(body)
      .set('Authorization', `Bearer ${baseTest.token}`);
      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe(body.name);
});