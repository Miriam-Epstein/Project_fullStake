-----------------------"��� �' ���� ������"-------------------------
-------------������ ����� ���� ������---------------------
--------------��� ������----------------------------
-- ����� ��� �������
CREATE DATABASE GameStoreDB;

-- ����� ���� �������
USE GameStoreDB;


-- 1.����� �������
CREATE TABLE Category (
    category_id INT IDENTITY PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);


-- ����� ������ �����
INSERT INTO Category (category_name) VALUES 
('�����'),--�����
('�����'),--�����
('������'),--������
('������'),--������
('�����');--�����

select * from Category
-- 2. ���� ������
CREATE TABLE Games (
    game_id INT IDENTITY PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category_code INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    picture VARCHAR(255),
    quantity_in_stock INT NOT NULL,
    FOREIGN KEY (category_code) REFERENCES Category(category_id)
);
-- ����� ������ ����� ������
INSERT INTO Games (product_name, category_code, price, picture, quantity_in_stock) VALUES 
('���� �����', 1, 59.99, 'talking_doll.jpg', 100),
('����� ��', 5, 69.99, 'Bimba_Jack.jpg', 150),
('�������', 4, 99.99, 'Monopol.jpg', 200),
('������', 2, 49.99, 'sudoku.jpg', 120),
('����� ����', 3, 69.99, 'gungle_speed.jpg', 80);
--����� ������ ����� ������
--('�����', 3, 69.99, 'the_race.jpg', 80);
--����� ������ ���� ����� �� �� ���� ������
UPDATE  Games
set  product_name='�����', picture='the_race.jpg'
where game_id=5
--����� ���� �����
INSERT INTO Games (product_name, category_code, price, picture, quantity_in_stock) VALUES 
('������', 2, 49.99, 'sudoku.jpg', 120);
select * from Games
--------------------------������ ����� �' ������ �� �� ������� ��� ����-------------
-- 3. ���� ������
CREATE TABLE Customer (
    customer_id INT IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,--��
    password VARCHAR(255) NOT NULL,--�����
    credit_info VARCHAR(255) NOT NULL--���� �����
);

-- ����� ������ �������
INSERT INTO Customer (name, password, credit_info) VALUES 
('����', '111', 'Visa 1234-5678-9012-3456'),
('���', '222', 'MasterCard 2345-6789-0123-4567'),
('���', '333', 'Discover 3456-7890-1234-5678'),
('�����', '444', 'Amex 4567-8901-2345-6789'),
('����', '555', 'Visa 5678-9012-3456-7890');

select * from Customer

-- 4. ����� �����
CREATE TABLE Shopping (
    shopping_id INT IDENTITY PRIMARY KEY,
    customer_code INT NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_code) REFERENCES Customer(customer_id)
);

-- ����� ������ ����� �����
INSERT INTO Shopping (customer_code, date, amount) VALUES 
(3, '2023-01-01', 59.99),
(2, '2024-08-02', 39.99),
(1, '2024-08-09', 49.99),
(3, '2024-11-14', 29.99),
(5, '2024-12-05', 69.99);

select * from Shopping

-- 5. ���� ����
CREATE TABLE PurchaseDetails (
    purchase_details_id INT IDENTITY PRIMARY KEY,
    purchase_code INT NOT NULL,
    game_code INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (purchase_code) REFERENCES Shopping(shopping_id),
    FOREIGN KEY (game_code) REFERENCES Games(game_id)
);

--����� ���� ����
INSERT INTO PurchaseDetails (purchase_code, game_code, quantity) VALUES 
(2, 5, 1),
(1, 2, 2),
(3, 3, 1),
(5, 2, 1),
(4, 5, 3);
select * from PurchaseDetails

------�� ������� ����------
select * from Category
select * from Games
select * from Customer
select * from Shopping
select * from PurchaseDetails

-------------------�� ��� ���� ������� ������ ������-------------------