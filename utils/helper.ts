import { brandsRequest } from "../api/apiClient";

export async function getToken (email: string, password: string) {
    const data = {
        'email' : email,
        'password' : password
    };
    const response = await brandsRequest
    .post('/admin/login')
    .send(data);
    expect(response.status).toBe(200);
    const token = response.body.token;
    return token;
} 