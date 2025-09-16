import { brandsRequest } from '../../api/apiClient';

test('POST/upload/single',async()=>{
   const response = await brandsRequest
   .post('/upload/single')
   .set('Content-Type','multipart/form-data')
   .attach('single','testData/attachments/5_minutes_cover.jpg');
   expect(response.statusCode).toBe(200);
   expect(response.body.filename).toEqual('5_minutes_cover.jpg');
});