import * as methods from '../../api/brands/methods';
import { brand } from "../baseTest";

test("DELETE /brands{id} Business logic validation/ Error when try to delete invalid brand", async () => {
  const id = 123;
  const response  = await methods.deleteBrands(id);
  expect(response.body.error).toEqual("Unable to delete brand");
  expect(response.statusCode).toBe(422);
});

test("DELETE /brands{id}", async () => {
  const response  = await methods.deleteBrands(brand._id);
  expect(response.statusCode).toBe(200);
  expect(response.body).toBe(null);
});
