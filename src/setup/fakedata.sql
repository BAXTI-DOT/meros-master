INSERT INTO categories (
	category_name
)
VALUES ('Kitoblar'),
	   ('Disklar'),
	   ('Kanstovar'),
	   ('Erkaklar uchun'),
	   ('Ayollar uchun'),
	   ('Bolalar uchun'),
	   ('Zargarlik buyumlari');


INSERT INTO sub_categories (
	subcategory_name,
	category_id
)
VALUES ('Dunyo kitoblari', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('O`zbekcha  kitoblar', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('Kinolar', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('Multfilmlar', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('Bog`chalar uchun', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('Maktab uchun', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('Erkaklar kiyimi', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Erkaklar aksessuarlari', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Ayollar kiyimi', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Ayollar aksessuarlari', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Bolalar kiyimi', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('Bolalar o`yinchog`i', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('Uzuklar', '058b431f-1ad6-4d82-a400-a3d33c6f4b50'),
	   ('Brasletlar', '058b431f-1ad6-4d82-a400-a3d33c6f4b50');


INSERT INTO products (
	product_name, 
	product_price, 
	category_id, 
	subcategory_id
)
VALUES('Dunyo1', 40000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Dunyo2', 60000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Dunyo3', 80000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Dunyo4', 35000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Dunyo5', 70000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Ozbek1', 98000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Ozbek2', 20000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Ozbek3', 55000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Ozbek4', 68000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Ozbek5', 88000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Kino1', 50000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c'),
	  ('Kino2', 91000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c'),
	  ('Kino3', 55000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c'),
	  ('Kino4', 18000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c'),
	  ('Kino5', 23000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c'),
	  ('Multfilm1', 8000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5'),
	  ('Multfilm2', 10000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5'),
	  ('Multfilm3', 54000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5'),
	  ('Multfilm4', 34000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5'),
	  ('Multfilm5', 87000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5'),
	  ('Bogcha1', 87000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40'),
	  ('Bogcha2', 56000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40'),
	  ('Bogcha3', 30000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40'),
	  ('Bogcha4', 41000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40'),
	  ('Bogcha5', 100000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40'),
	  ('Maktab1', 79999, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062'),
	  ('Maktab2', 56666, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062'),
	  ('Maktab3', 81000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062'),
	  ('Maktab4', 10000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062'),
	  ('Maktab5', 22000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062'),
	  ('Ekiyim1', 22000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Ekiyim2', 55000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Ekiyim3', 88000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Ekiyim4', 99000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Ekiyim5', 44444, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Eakses1', 30000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6'),
	  ('Eakses2', 56666, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6'),
	  ('Eakses3', 77000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6'),
	  ('Eakses4', 55000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6'),
	  ('Eakses5', 99999, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6'),
	  ('Akiyim1', 99999, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Akiyim2', 66666, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Akiyim3', 44444, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Akiyim4', 11110, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Akiyim5', 20000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Aakses1', 20000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236'),
	  ('Aakses2', 120000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236'),
	  ('Aakses3', 133000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236'),
	  ('Aakses4', 98000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236'),
	  ('Aakses5', 170000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236'),
	  ('Bkiyim1', 200000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Bkiyim2', 250000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Bkiyim3', 132000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Bkiyim4', 110000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Bkiyim5', 290000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Boyin1', 290000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85'),
	  ('Boyin2', 166000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85'),
	  ('Boyin3', 110000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85'),
	  ('Boyin4', 88000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85'),
	  ('Boyin5', 270000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85'),
	  ('Uzuk1', 270000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882'),
	  ('Uzuk2', 110000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882'),
	  ('Uzuk3', 65000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882'),
	  ('Uzuk4', 29000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882'),
	  ('Uzuk5', 310000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882'),
	  ('Braslet1', 310000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9'),
	  ('Braslet2', 620000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9'),
	  ('Braslet3', 870000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9'),
	  ('Braslet4', 330000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9'),
	  ('Braslet5', 560000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9');

INSERT INTO new_products(
	product_id
)

VALUES('a3c496f8-68ac-4f6f-8882-94886a37403c'),
	  ('19f4330c-d8e8-490b-a3fc-57b03a06c3d9'),
	  ('76d32446-f0cc-4a5b-89a8-2ee998e7d80c'),
	  ('6043741a-7621-40b1-bacf-eae0acd57854');

INSERT INTO gift_products(
	product_id
)

VALUES('57a16a5c-bf7a-442d-a119-16c27cb03fc9'),
	  ('57d7b261-b2bd-4fed-b737-8ff6d6b53fe3'),
	  ('8e31011f-bd46-441a-9781-14f00aaf6b9f'),
	  ('b0c111cb-3455-4f92-9e43-173d1454d85f');

INSERT INTO new_products_title (title_name, category_id)

VALUES('Yangi kitoblar', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
      ('Yangi disklar', '79b728d7-0399-4657-a154-b60c2f2632c3'),
      ('Yangi kanstovarlar', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
      ('Erkaklar uchun yangi maxsulotlar', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
      ('Ayollar uchun yangi maxsulotlar', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
      ('Bolalar uchun yangi maxsulotlar', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
      ('Yangi zargarlik buyumlari', '058b431f-1ad6-4d82-a400-a3d33c6f4b50');

INSERT INTO gift_products_title (title_name, category_id)

VALUES('Kitoblar sovg`aga', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
      ('Disklar sovg`aga', '79b728d7-0399-4657-a154-b60c2f2632c3'),
      ('Kanstovar sovg`aga', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
      ('Erkaklar buyumlari sovg`aga', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
      ('Ayollar buyumlari sovg`aga', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
      ('Bolalar buyumlari sovg`aga', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
      ('Zargarlik buyumlari sovg`aga', '058b431f-1ad6-4d82-a400-a3d33c6f4b50');







