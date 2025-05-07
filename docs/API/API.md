## API bằng cấp
**1. Tạo mới bằng cấp** 
`POST : http://localhost:3000/api/degrees`
**2. Lấy danh sách bằng cấp đã tạo**
`GET : http://localhost:3000/api/degrees`

## API Giáo viên
**1. Lấy toàn bộ danh sách giáo viên**
`GET http://localhost:3000/api/teachers`
**2. Lấy danh sách giáo viên theo lọc filter**
`GET http://localhost:3000/api/teachers?degree_id=?&faculty_id=?&name=?`
**3. Lấy thông tin chi tiết của 1 giáo viên**
`GET http://localhost:3000/api/teachers/:id`
**4. Thêm một giáo viên mới**
`POST http://localhost:3000/api/teachers`
**5. Cập nhật thông tin giáo viên**
`PUT http://localhost:3000/api/teachers/:id`
**6. Xoá một giáo viên**
`DELETE http://localhost:3000/api/teachers/:id`