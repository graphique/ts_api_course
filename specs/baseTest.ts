import * as methods from "../api/brands/methods";

export let brand;
export let token;


beforeAll(async()=>{
    brand = await methods.createBrand();
    token = await methods.getToken();
});