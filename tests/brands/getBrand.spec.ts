import * as methods from '../../api/brands/methods';
import { brand } from "../baseTest";

test("GET /brands{id}", async () => {
  const id = brand._id; //в дальнейшем можно взять из запроса GET brands чтобы не хардкодить
  const expectedName = brand.name;
  const response = await methods.getBrand(id);
  const body = response.body;
  console.log("response ", body);
  expect(response.statusCode).toBe(200);
  expect(body.name).toEqual(expectedName); //проверить чтобы имя совпадало с ожидаемым
});

test("Business logic/ GET brand invalid id should throw 404", async () => {
  const id = "12348f0500b2931578c0a5ac";
  const response = await methods.getBrand(id);
  expect(response.statusCode).toBe(404);
  expect(response.body.error).toEqual("Brand not found.");
});
