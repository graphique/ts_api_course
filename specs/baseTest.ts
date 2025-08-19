import * as methods from "../api/brands/methods";
import * as helper from '../utils/helper';
import { Variables } from "../global/Variables";

export let brand;
export let token;


beforeAll(async()=>{
    brand = await methods.createBrand();
    token = await helper.getToken(Variables.adminEmail, Variables.adminPassword);
});