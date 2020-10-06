INSERT INTO departments (name)
VALUES
('Manager'),
('sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Accountant', 125000, 6),
('Legal Team Lead', 25000, 7),
('Lawyer', 190000, 8),
('Lead Engineer', 150000, 9);

INSERT INTO employee(first_name, last_name,role_id)
VALUES
('John','Doe',1),
('Mike','Chan',2),
('Ashley','Rodriguez',3),
('Kevin','Tupik',4),
('Malia','Brown', 6),
('Sarah','Lourd',7),
('Tom','Allen',8),
('Christian','Eckenrode',9);

