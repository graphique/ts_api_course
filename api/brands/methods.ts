import { brandsRequest } from "../apiClient";
import { brandUniqueName } from "../../testData/dataGenerator";
import { Variables } from "../../global/Variables";

/**
 * 
 * @param body 
 */
export async function createBrand () {
    const name = brandUniqueName();

    const body = { //сделать уникальными значения
        "name" : name,
        "description" : "new description"
    }
    const brand = await brandsRequest
        .post('/brands')
        .send(body);
        expect(brand.statusCode).toBe(200);
        return brand.body;
}
/**
 * 
 * @param id 
 */
export async function deleteBrand (id: string) {
    const response = await brandsRequest
    .del(`/brands/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(null);
    console.log('brand id ' + id + ' successfully deleted');
}

export async function postBrands (data: Object) {
    return await brandsRequest.post("/brands").send(data);
}

export async function deleteBrands (id: string|number) {
    return await brandsRequest.del(`/brands/${id}`);
}

export async function getBrand (id: string| number) {
    return await brandsRequest.get(`/brands/${id}`);
}

export async function getBrands() {
    return await brandsRequest.get("/brands");;
}

export async function putBrands (id: string|number, data: Object) {
    return await brandsRequest.put(`/brands/${id}`).send(data);
}

export async function getCategories () {
    return await brandsRequest.get('/categories');
}

export async function getToken () {
    const data = {
        'email' : Variables.adminEmail,
        'password' : Variables.adminPassword
    };
    const response = await brandsRequest
    .post('/admin/login')
    .send(data);
    expect(response.status).toBe(200);
    const token = response.body.token;
    return token;
} 



