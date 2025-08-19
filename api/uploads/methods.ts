import { brandsRequest } from '../../api/apiClient';

export async function uploadMultipleFiles (files: string[]) {
    const req = brandsRequest.
    post('/upload/multiple')
    .set('Content-Type','multipart/form-data');
    files.forEach(file => {
        req.attach('multiple',file);
    });
    expect((await req).statusCode).toBe(200);
    return req;
}