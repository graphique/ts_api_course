import { brandsRequest } from '../../api/apiClient';


test.only('POST/upload/single',async()=>{
   const response = await brandsRequest
   .post('/upload/single')
   .set('Content-Type','multipart/form-data')
   .attach('single','testData/attachments/5_minutes_cover.jpg');
   console.log(response.body);
});