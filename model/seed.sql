
INSERT INTO departments (name)
VALUES
('HR'),  -- 1
('sales'), -- 2
('Engineering'), -- 3
('Finance'), -- 4
('Legal'); -- 5

INSERT INTO roles (title, salary, department_id)
VALUES
('HR Executive', 100000, 1), -- 1
('Recruiter', 100000, 1), -- 2
('Sales Lead', 100000, 2), -- 3
('Salesperson', 80000, 2), -- 4
('Lead Engineer', 150000, 3), -- 5
('Software Engineer', 120000, 3), -- 6
('Senior Software Engineer', 150000, 3), -- 7
('Accountant', 125000, 4), -- 8
('Legal Team Lead', 25000, 5), -- 9
('Lawyer', 190000, 5); -- 10


INSERT INTO employees (first_name, last_name,role_id, manager_id)
VALUES
('John','Doe', 1, null), -- 1
('Mike','Chan', 2, 1), -- 2
('Ashley','Rodriguez', 5, NULL), -- 3
('Kevin','Tupik', 6, 3), -- 4
('Malia','Brown', 7, 3), -- 5
('Sarah','Lourd', 9, NULL), -- 6
('Tom','Allen', 10, 6),
('Christian','Eckenrode', 8, NULL);