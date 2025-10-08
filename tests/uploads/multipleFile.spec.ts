import * as methods from '../../api/uploads/methods';

test('POST/upload/multiple',async()=>{
    const files = ['testData/attachments/5_minutes_cover.jpg',
        'testData/attachments/a4183727347_16.jpg'];
    const response = await methods.uploadMultipleFiles(files);
    for (const file in files) {
        expect (files[file]).toContain(response.body[file].filename);
    }
});