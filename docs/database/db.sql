-- 1. Bằng cấp (Degree)
CREATE TABLE Degree (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    symbol_name VARCHAR(20) NOT NULL,
    coefficient FLOAT NOT NULL,
    UNIQUE (name,symbol_name)
);

-- 2. Giáo viên (Teacher)
CREATE TABLE Teacher (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    degree_id INT REFERENCES Degree(id) ON DELETE SET NULL,
    email VARCHAR(100),
    phone VARCHAR(20)
);

-- 3. Tài khoản người dùng (Account)
CREATE TABLE Account (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('AdminTruong', 'AdminKhoa', 'GiaoVien')),
    teacher_id INT REFERENCES Teacher(id) ON DELETE CASCADE,
    UNIQUE (username)
);

-- 4. Khoa (Faculty)
CREATE TABLE Faculty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    contact_phone VARCHAR(20),
    head_of_faculty INT REFERENCES Teacher(id) ON DELETE SET NULL,
    UNIQUE (name)
);

-- 5. Gán giáo viên vào khoa (nhiều-một)
CREATE TABLE Teacher_Faculty (
    teacher_id INT REFERENCES Teacher(id) ON DELETE CASCADE,
    faculty_id INT REFERENCES Faculty(id) ON DELETE CASCADE,
    PRIMARY KEY (teacher_id, faculty_id)
);

-- 6. Năm học (AcademicYear)
CREATE TABLE AcademicYear (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL, -- Ví dụ: '2024-2025'
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

-- 7. Kỳ học (Semester)
CREATE TABLE Semester (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL, -- Ví dụ: 'HK1'
    academic_year_id INT REFERENCES AcademicYear(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

-- 8. Lớp học phần (Course)
CREATE TABLE Course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    faculty_id INT REFERENCES Faculty(id),
    semester_id INT REFERENCES Semester(id),
    student_count INT DEFAULT 0,
    course_weight FLOAT DEFAULT 1.0 CHECK (course_weight > 0),
    UNIQUE (name, semester_id) -- Không trùng tên lớp trong cùng 1 kỳ
);

-- 9. Phân công giảng dạy (TeachingAssignment)
CREATE TABLE TeachingAssignment (
    id SERIAL PRIMARY KEY,
    teacher_id INT REFERENCES Teacher(id),
    course_id INT REFERENCES Course(id),
    assigned_date DATE DEFAULT CURRENT_DATE,
    UNIQUE (teacher_id, course_id) -- Không gán trùng 1 giáo viên vào cùng lớp
);

-- 10. Hệ số giảng dạy bổ sung (Coefficient)
CREATE TABLE Coefficient (
    id SERIAL PRIMARY KEY,
    type VARCHAR(10) NOT NULL CHECK (type IN ('mon', 'lop')) ,
    reference_id INT NOT NULL,
    value FLOAT NOT NULL
);

-- 11. Bảng tính tiền dạy (SalaryCalculation)
CREATE TABLE SalaryCalculation (
    id SERIAL PRIMARY KEY,
    teacher_id INT REFERENCES Teacher(id),
    course_id INT REFERENCES Course(id),
    semester_id INT REFERENCES Semester(id),
    total_salary NUMERIC(15,2) NOT NULL CHECK (total_salary >= 0),
    calculated_date DATE DEFAULT CURRENT_DATE
);

-- 12. Báo cáo xuất file (ReportExport)
CREATE TABLE ReportExport (
    id SERIAL PRIMARY KEY,
    semester_id INT REFERENCES Semester(id),
    faculty_id INT REFERENCES Faculty(id),
    report_type VARCHAR(20), -- 'gv', 'khoa', 'truong'
    file_type VARCHAR(10) CHECK (file_type IN ('PDF', 'Excel')),
    file_name VARCHAR(255),
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chỉ giữ lại các indexes quan trọng nhất
CREATE INDEX idx_course_semester ON Course(semester_id);
CREATE INDEX idx_salary_teacher ON SalaryCalculation(teacher_id);
CREATE INDEX idx_salary_semester ON SalaryCalculation(semester_id);
