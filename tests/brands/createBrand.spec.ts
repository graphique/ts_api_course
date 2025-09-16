import * as methods from "../../api/brands/methods";
import { brandUniqueName } from "../../testData/dataGenerator";
import { brand } from "../baseTest";

describe("create brand positive tests", () => {
  let newBrand;
  test("POST /brands", async () => {
    const data = {
      name: brandUniqueName(), // уникальное при каждом запросе
      description: "Test Brand description",
    };
    const response = await methods.postBrands(data);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(data.name); //проверить что имя совпадает с созданным
    expect(Object.keys(response.body)).toContain("createdAt");
    newBrand = response.body; //проверить что в созданном бренде есть поле createdAt
    //можно также использовать проверку toHaveProperty
  });

  afterAll(async () => {
    await methods.deleteBrand(newBrand._id);
  });
});

test("Schema validation - Name is a mandatory field", async () => {
  const data = {
    name: "", // пустое имя
    description: "Test Brand description",
  };
  const response = await methods.postBrands(data);
  console.log(response.body);
  expect(response.statusCode).toBe(422);
  expect(response.body.error).toEqual("Name is required");
});

test("Schema validation - Min char length for name >1 ", async () => {
  const data = {
    name: "a", // имя из одного символа
    description: "Test Brand description",
  };
  const response = await methods.postBrands(data);
  console.log(response.body);
  expect(response.statusCode).toBe(422);
  expect(response.body.error).toEqual("Brand name is too short");
});

test("Business logic - Duplicate brand entries not allowed ", async () => {
  const name = brand.name; //имя ранее созданного бренда
  const description = brand.description; //описание ранее созданного бренда
  const data = {
    name: name, // повторно пытаемся создать бренд с уже существующим именем
    description: description,
  };
  const newResponse = await methods.postBrands(data);
  console.log(newResponse.body);
  expect(newResponse.statusCode).toBe(422);
  expect(newResponse.body.error).toEqual(`${name} already exists`);
});
