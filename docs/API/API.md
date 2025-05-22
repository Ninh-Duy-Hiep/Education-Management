# 📚 API Tài liệu hệ thống quản lý giảng dạy

---

## 🏅 API Bằng cấp (Degree)

**1. Tạo mới bằng cấp**
`POST /api/degrees`

**2. Lấy danh sách bằng cấp đã tạo**
`GET /api/degrees`

---

## 👨‍🏫 API Giáo viên (Teacher)

**1. Lấy toàn bộ danh sách giáo viên**
`GET /api/teachers`

**2. Lọc giáo viên theo bằng cấp, khoa, tên**
`GET /api/teachers?degree_id=?&faculty_id=?&name=?`

**3. Lấy thông tin chi tiết giáo viên**
`GET /api/teachers/:id`

**4. Thêm giáo viên mới**
`POST /api/teachers`

**5. Cập nhật giáo viên**
`PUT /api/teachers/:id`

**6. Xoá giáo viên**
`DELETE /api/teachers/:id`

---

## 🔐 API Tài khoản (Account)

**1. Đăng nhập**
`POST /api/accounts/login`

**2. Đăng ký**
`POST /api/accounts/register`

---

## 🏫 API Khoa (Faculty)

**1. Lấy tất cả khoa**
`GET /api/faculties`

**2. Lấy chi tiết khoa**
`GET /api/faculties/:id`

**3. Tạo khoa mới**
`POST /api/faculties`

**4. Cập nhật khoa**
`PUT /api/faculties/:id`

**5. Xoá khoa**
`DELETE /api/faculties/:id`

---

## 🤝 API Gán giáo viên vào khoa (Teacher-Faculty)

**1. Gán giáo viên vào khoa**
`POST /api/teacher-faculty`

**2. Lấy khoa mà giáo viên thuộc**
`GET /api/teacher-faculty/teachers/:teacherID`

**3. Lấy giáo viên thuộc khoa**
`GET /api/teacher-faculty/faculties/:facultyID`

**4. Huỷ gán giáo viên khỏi khoa**
`DELETE /api/teacher-faculty`

---

## 📅 API Năm học (Academic Year)

**1. Lấy tất cả năm học**
`GET /api/academic-years`

**2. Lấy năm học theo ID**
`GET /api/academic-years/:id`

**3. Thêm năm học mới**
`POST /api/academic-years`

**4. Cập nhật năm học**
`PUT /api/academic-years/:id`

**5. Xoá năm học**
`DELETE /api/academic-years/:id`

---

## 📆 API Kỳ học (Semester)

**1. Tạo kỳ học mới**
`POST /api/semesters`

**2. Lấy danh sách kỳ học**
`GET /api/semesters`

**3. Lấy kỳ học theo ID**
`GET /api/semesters/:id`

**4. Cập nhật kỳ học**
`PUT /api/semesters/:id`

**5. Xoá kỳ học**
`DELETE /api/semesters/:id`

---

## 🧾 API Lớp học phần (Course)

**1. Tạo lớp học phần**
`POST /api/courses`

**2. Lấy danh sách lớp học phần**
`GET /api/courses`

**3. Lấy lớp học phần theo ID**
`GET /api/courses/:id`

**4. Cập nhật lớp học phần**
`PUT /api/courses/:id`

**5. Xoá lớp học phần**
`DELETE /api/courses/:id`

---

## 🧑‍🏫 API Phân công giảng dạy (Teaching Assignment)

**1. Tạo phân công**
`POST /api/assignments`

**2. Lấy danh sách phân công**
`GET /api/assignments`

**3. Lấy phân công theo ID**
`GET /api/assignments/:id`

**4. Cập nhật phân công**
`PUT /api/assignments/:id`

**5. Xoá phân công**
`DELETE /api/assignments/:id`

---

## 📐 API Hệ số giảng dạy (Coefficient)

**1. Tạo hệ số**
`POST /api/coefficients`

**2. Lấy danh sách hệ số**
`GET /api/coefficients`

**3. Lấy hệ số theo ID**
`GET /api/coefficients/:id`

**4. Cập nhật hệ số**
`PUT /api/coefficients/:id`

**5. Xoá hệ số**
`DELETE /api/coefficients/:id`

---

## 💰 API Tính lương giảng dạy (Salary Calculation)

**1. Tính lương mới**
`POST /api/salaries/calculate`

**2. Lấy danh sách bảng lương**
`GET /api/salaries`

**3. Lấy bảng lương theo ID**
`GET /api/salaries/:id`

**4. Xoá bảng lương**
`DELETE /api/salaries/:id`



