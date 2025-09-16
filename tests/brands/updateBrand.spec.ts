import * as methods from '../../api/brands/methods';
import { brandUniqueName } from "../../testData/dataGenerator";
import { brand } from "../baseTest";

test("PUT /brands{id}", async () => {
  const id = brand._id;
  const newData = {
    name: brand.name + " updated",
    description: "some updated description",
  };
  const newBrand = await methods.putBrands(id, newData);
  expect(newBrand.statusCode).toBe(200);
  expect(newBrand.body.name).not.toEqual(brand.name);
  console.log(newBrand.body);
});

test("PUT /brands{id} Schema validation/ Brand name > 30 chars is not accepted", async () => {
  const id = brand.id;
  const newData = {
    name: "1234567891234567891234567891234", //> 30 characters long
    description: "some new description",
  };
  const response = await methods.putBrands(id, newData);
  expect(response.statusCode).toBe(422);
  expect(response.body.error).toEqual("Brand name is too long");
});

test("PUT /brands{id} Schema validation/ Brand description must be a string", async () => {
  const id = brand.id;
  const newData = {
    name: brandUniqueName(),
    description: 123, //не string a number
  };
  const response = await methods.putBrands(id, newData);
  expect(response.statusCode).toBe(422);
  expect(response.body.error).toEqual("Brand description must be a string");
});

test("PUT /brands{id} Business logic validation/ Error when try to update invalid brand", async () => {
  const id = 123;
  const newData = {
    name: brand.name + " updated",
    description: "some updated description",
  };
  const response = await methods.putBrands(id, newData);
  expect(response.body.error).toEqual("Unable to update brands");
  expect(response.statusCode).toBe(422);
});
