## API bằng cấp
**1. Tạo mới bằng cấp** 
`POST http://localhost:3000/api/degrees`
**2. Lấy danh sách bằng cấp đã tạo**
`GET http://localhost:3000/api/degrees`

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

## API Tài khoản
**1. Đăng nhập**
`POST http://localhost:3000/api/accounts/login`
**2. Đăng ký**
`POST http://localhost:3000/api/accounts/register`

## API Khoa
**1. Lấy tất cả khoa**
`GET http://localhost:3000/api/faculties`
**2. Lấy thông tin chi tiết của khoa**
`GET http://localhost:3000/api/faculties/:id`
**3. Tạo khoa mới**
`POST http://localhost:3000/api/faculties`
**4. Cập nhật thông tin khoa**
`PUT http://localhost:3000/api/faculties/:id`
**5. Xóa khoa**
`DELETE http://localhost:3000/api/faculties/:id`

## API gán giáo viên vào khoa 
**1. Gán giáo viên vào khoa**
`POST http://localhost:3000/api/teacher-faculty`
**2. Lấy các khoa mà giáo viên thuộc**
`GET http://localhost:3000/api/teacher-faculty/teachers/:teacherID` 
**3. Lấy các giáo viên của một khoa**
`GET http://localhost:3000/api/teacher-faculty/faculties/:facultyID` 
**4. Huỷ gán giáo viên khỏi khoa**
`DELETE http://localhost:3000/api/teacher-faculty`

## API năm học
**1. Lấy tất cả năm học**
`GET http://localhost:3000/api/academic-years`
**2. Lấy năm học theo id**
`GET http://localhost:3000/api/academic-years/:id`
**3. Thêm năm học mới**
`POST http://localhost:3000/api/academic-years`
**4. Cập nhật năm học**
`PUT http://localhost:3000/api/academic-years/:id`
**5. Xóa năm học**
`DELETE http://localhost:3000/api/academic-years/:id`

## API kỳ học
**1. Tạo mới kỳ học**
`POST http://localhost:3000/api/semesters`
