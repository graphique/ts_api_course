import { brandsRequest } from '../../api/apiClient';
import * as methods from '../../api/brands/methods';


  test("GET /categories", async () => {
    const response = await methods.getCategories();
    const body = response.body;
    console.log("response body ", body);
    expect(response.statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(1); //проверить что количество зписей больше 1
    expect(Object.keys(body[0])).toEqual(["_id", "name"]); //проверить что первая запись имеет структуру id name
  });

