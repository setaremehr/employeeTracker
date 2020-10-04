DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INT  AUTO_INCREMENT,
    name VARCHAR(30) ,
    PRIMARY KEY(id)
); 

CREATE TABLE employee_role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

