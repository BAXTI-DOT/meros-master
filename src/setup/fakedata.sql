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
VALUES ('Dunyo kitoblari', 'ef2667f5-a30a-451c-9371-5e5ca795a444'),
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

INSERT INTO sub_classes (
	subclass_name,
	subcategory_id,
	category_id
)
 
VALUES ('Tarixiy adabiyot', '272a6f72-e7dd-4912-b131-1d4a769501e5', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('Badiy adabiyot', '272a6f72-e7dd-4912-b131-1d4a769501e5', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('Sherlar', '097ccc14-6d5b-442d-8feb-4b8281e4461f', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('Romanlar', '097ccc14-6d5b-442d-8feb-4b8281e4461f', 'e11d9387-3161-48ac-b182-edbc8b90548f'),
	   ('Jaxon kinolari', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('O`zbek kinolari', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('Disney multfilmlari', '615351ab-ef03-4b24-893a-391b240e09c5', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('O`zbek multfilmlari', '615351ab-ef03-4b24-893a-391b240e09c5', '79b728d7-0399-4657-a154-b60c2f2632c3'),
	   ('Ertak kitoblar', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('O`quv qurollari', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('Darsliklar', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('O`quv qurollar', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '2b70aac6-e92f-42b9-9b71-e8c7aa77676b'),
	   ('Kastyumlar', 'ba5f0f3d-a315-4c77-9544-9239399fd746', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Ko`ylaklar', 'ba5f0f3d-a315-4c77-9544-9239399fd746', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Erkaklar soati', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Do`ppilar', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'aa760a8c-6838-4f85-8905-275dbcf2ecc1'),
	   ('Yubkalar', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Tungi ko`ylaklar', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Ayollar sumkasi', '146ff9fb-11f9-4ee4-b298-458132a6b236', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Ayollar kosmetikasi', '146ff9fb-11f9-4ee4-b298-458132a6b236', '16fff5ba-9d97-4f90-a2a5-00c58e742ac9'),
	   ('Qishki kiyimlar', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('Mavsumiy kiyimlar', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('O`g`il bolalar o`yinchog`i', '06721552-533c-4d2e-97d6-a70d47d3cb85', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('Qiz bolalar o`yinchog`i', '06721552-533c-4d2e-97d6-a70d47d3cb85', '43ad87a1-e271-41ff-ac26-81fc22895fcb'),
	   ('Erkaklar uzugi', '033a805c-999a-4478-bcbd-56eae407c882', '058b431f-1ad6-4d82-a400-a3d33c6f4b50'),
	   ('Ayollar uzugi', '033a805c-999a-4478-bcbd-56eae407c882', '058b431f-1ad6-4d82-a400-a3d33c6f4b50'),
	   ('Tilla brasletlar', '64d78af8-d73f-446d-8876-0dfa938898a9', '058b431f-1ad6-4d82-a400-a3d33c6f4b50'),
	   ('Kumush brasletlar', '64d78af8-d73f-446d-8876-0dfa938898a9', '058b431f-1ad6-4d82-a400-a3d33c6f4b50');


ALTER TABLE products ADD COLUMN subclass_id uuid references sub_classes (subclass_id);

INSERT INTO products (
	product_name, 
	product_price, 
	category_id, 
	subcategory_id,
	subclass_id
)

VALUES('Dunyo1', 40000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5', '409871d7-b956-480f-a966-c776c53cba4e'),
	  ('Dunyo2', 60000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5', '409871d7-b956-480f-a966-c776c53cba4e'),
	  ('Dunyo3', 80000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5', '3e65142e-f645-4d13-97da-8f3dd7166a4b'),
	  ('Dunyo4', 35000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5', '3e65142e-f645-4d13-97da-8f3dd7166a4b'),
	  ('Dunyo5', 70000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '272a6f72-e7dd-4912-b131-1d4a769501e5', '3e65142e-f645-4d13-97da-8f3dd7166a4b'),
	  ('Ozbek1', 98000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f', '2a0e900b-665b-4b64-9c21-9b48c3faaea8'),
	  ('Ozbek2', 20000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f', '2a0e900b-665b-4b64-9c21-9b48c3faaea8'),
	  ('Ozbek3', 55000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f', 'e689ebbb-f4c4-4c2f-ab25-faba8b9f9c28'),
	  ('Ozbek4', 68000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f', 'e689ebbb-f4c4-4c2f-ab25-faba8b9f9c28'),
	  ('Ozbek5', 88000, 'e11d9387-3161-48ac-b182-edbc8b90548f', '097ccc14-6d5b-442d-8feb-4b8281e4461f', 'e689ebbb-f4c4-4c2f-ab25-faba8b9f9c28'),
	  ('Kino1', 50000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '334e8010-5cf1-48b5-a5ec-d3bd785059ee'),
	  ('Kino2', 91000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '334e8010-5cf1-48b5-a5ec-d3bd785059ee'),
	  ('Kino3', 55000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '06250dc1-6e13-4c74-b2f0-09b0b1c67591'),
	  ('Kino4', 18000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '06250dc1-6e13-4c74-b2f0-09b0b1c67591'),
	  ('Kino5', 23000, '79b728d7-0399-4657-a154-b60c2f2632c3', '386f8ec0-f710-4e76-a23a-2b652a9c9d0c', '06250dc1-6e13-4c74-b2f0-09b0b1c67591'),
	  ('Multfilm1', 8000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5', '20535b8a-048d-4fec-9699-41ad1f843bae'),
	  ('Multfilm2', 10000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5', '20535b8a-048d-4fec-9699-41ad1f843bae'),
	  ('Multfilm3', 54000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5', 'efee4286-ba29-4ba7-9a30-53a4acd43223'),
	  ('Multfilm4', 34000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5', 'efee4286-ba29-4ba7-9a30-53a4acd43223'),
	  ('Multfilm5', 87000, '79b728d7-0399-4657-a154-b60c2f2632c3', '615351ab-ef03-4b24-893a-391b240e09c5', 'efee4286-ba29-4ba7-9a30-53a4acd43223'),
	  ('Bogcha1', 87000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '3c3caee6-b9dc-4b9b-8aad-33327a416cfa'),
	  ('Bogcha2', 56000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '3c3caee6-b9dc-4b9b-8aad-33327a416cfa'),
	  ('Bogcha3', 30000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '3c3caee6-b9dc-4b9b-8aad-33327a416cfa'),
	  ('Bogcha4', 41000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '9af3d3e2-1d7b-4685-92c5-d52f475df0fa'),
	  ('Bogcha5', 100000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', 'd118ceff-32aa-4ee9-a54a-97c4df574a40', '9af3d3e2-1d7b-4685-92c5-d52f475df0fa'),
	  ('Maktab1', 79999, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', 'adc60cd0-bc70-4ca7-a82d-2d21d3a197ae'),
	  ('Maktab2', 56666, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '322f0e51-2c29-4245-9146-cdeb205fca21'),
	  ('Maktab3', 81000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '322f0e51-2c29-4245-9146-cdeb205fca21'),
	  ('Maktab4', 10000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '322f0e51-2c29-4245-9146-cdeb205fca21'),
	  ('Maktab5', 22000, '2b70aac6-e92f-42b9-9b71-e8c7aa77676b', '7364e8ef-bdbd-44e2-ad1e-8c2c41e59062', '322f0e51-2c29-4245-9146-cdeb205fca21'),
	  ('Ekiyim1', 22000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746', '87cf5575-241a-4183-b76b-33eb0cd09702'),
	  ('Ekiyim2', 55000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746', '87cf5575-241a-4183-b76b-33eb0cd09702'),
	  ('Ekiyim3', 88000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746', '87cf5575-241a-4183-b76b-33eb0cd09702'),
	  ('Ekiyim4', 99000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746', '8ebe4d8d-efbc-49d9-8d86-e3b50e141543'),
	  ('Ekiyim5', 44444, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'ba5f0f3d-a315-4c77-9544-9239399fd746', '8ebe4d8d-efbc-49d9-8d86-e3b50e141543'),
	  ('Eakses1', 30000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'af79b0c2-1248-42f9-be70-b387284e770a'),
	  ('Eakses2', 56666, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'af79b0c2-1248-42f9-be70-b387284e770a'),
	  ('Eakses3', 77000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'af79b0c2-1248-42f9-be70-b387284e770a'),
	  ('Eakses4', 55000, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', 'af79b0c2-1248-42f9-be70-b387284e770a'),
	  ('Eakses5', 99999, 'aa760a8c-6838-4f85-8905-275dbcf2ecc1', 'e5ca132f-59ad-48c5-9799-010bfad10cb6', '76c0faa9-7a58-4ef5-b923-0fffcf0a0b61'),
	  ('Akiyim1', 99999, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', 'e5c88caf-5c8b-4ab9-a4ec-ad63c3fc18f8'),
	  ('Akiyim2', 66666, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', 'e5c88caf-5c8b-4ab9-a4ec-ad63c3fc18f8'),
	  ('Akiyim3', 44444, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', 'e5c88caf-5c8b-4ab9-a4ec-ad63c3fc18f8'),
	  ('Akiyim4', 11110, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', 'e5c88caf-5c8b-4ab9-a4ec-ad63c3fc18f8'),
	  ('Akiyim5', 20000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '3dd20acf-19e1-4cf2-b70e-57a994efd20e', 'bc8ab408-a9d3-40db-91ce-ee56a68819ff'),
	  ('Aakses1', 20000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236', '2b32f86d-5642-43e2-b838-f5a1282b4115'),
	  ('Aakses2', 120000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236', '2b32f86d-5642-43e2-b838-f5a1282b4115'),
	  ('Aakses3', 133000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236', 'ac8e02a6-745e-4f71-a5ee-bed4eb60e1a3'),
	  ('Aakses4', 98000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236', 'ac8e02a6-745e-4f71-a5ee-bed4eb60e1a3'),
	  ('Aakses5', 170000, '16fff5ba-9d97-4f90-a2a5-00c58e742ac9', '146ff9fb-11f9-4ee4-b298-458132a6b236', 'ac8e02a6-745e-4f71-a5ee-bed4eb60e1a3'),
	  ('Bkiyim1', 200000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', '2b9e3daa-cf57-4f1f-b7dc-48a65bb1de47'),
	  ('Bkiyim2', 250000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', '2b9e3daa-cf57-4f1f-b7dc-48a65bb1de47'),
	  ('Bkiyim3', 132000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', '2b9e3daa-cf57-4f1f-b7dc-48a65bb1de47'),
	  ('Bkiyim4', 110000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', 'e8ee8ef2-5738-43d3-b14f-64f2eff1a528'),
	  ('Bkiyim5', 290000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e', 'e8ee8ef2-5738-43d3-b14f-64f2eff1a528'),
	  ('Boyin1', 290000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85', '850ebc8a-0839-474e-8320-ae69532a579d'),
	  ('Boyin2', 166000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85', '850ebc8a-0839-474e-8320-ae69532a579d'),
	  ('Boyin3', 110000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85', '0234f73f-3504-465a-b785-fdbbca535d79'),
	  ('Boyin4', 88000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85', '0234f73f-3504-465a-b785-fdbbca535d79'),
	  ('Boyin5', 270000, '43ad87a1-e271-41ff-ac26-81fc22895fcb', '06721552-533c-4d2e-97d6-a70d47d3cb85', '0234f73f-3504-465a-b785-fdbbca535d79'),
	  ('Uzuk1', 270000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882', '08d04e87-2348-4d94-8134-13a1c2a20745'),
	  ('Uzuk2', 110000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882', '08d04e87-2348-4d94-8134-13a1c2a20745'),
	  ('Uzuk3', 65000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882', 'bee9b822-d5e9-4497-b388-095782fec4a8'),
	  ('Uzuk4', 29000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882', 'bee9b822-d5e9-4497-b388-095782fec4a8'),
	  ('Uzuk5', 310000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '033a805c-999a-4478-bcbd-56eae407c882', 'bee9b822-d5e9-4497-b388-095782fec4a8'),
	  ('Braslet1', 310000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9', 'f89157bf-e04c-4130-b3ca-31e1e687071b'),
	  ('Braslet2', 620000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9', 'd3d4c09f-31b3-4aa1-b811-3a9ca8928fc7'),
	  ('Braslet3', 870000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9', 'd3d4c09f-31b3-4aa1-b811-3a9ca8928fc7'),
	  ('Braslet4', 330000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9', 'd3d4c09f-31b3-4aa1-b811-3a9ca8928fc7'),
	  ('Braslet5', 560000, '058b431f-1ad6-4d82-a400-a3d33c6f4b50', '64d78af8-d73f-446d-8876-0dfa938898a9', 'd3d4c09f-31b3-4aa1-b811-3a9ca8928fc7');

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

INSERT INTO best_offers(
	product_id
)

VALUES('549ede7f-9ed5-4b60-80d8-d7edbe1c9b8e'),
	  ('13720f25-4556-4089-88f4-16f045fb089b'),
	  ('34123b6c-29a6-4ea7-bce5-e978b2acc44d'),
	  ('a066e7df-9e16-4ba4-8bf3-35da3dbfade4');


INSERT INTO sale_products(
	product_id
)

VALUES('5e86bae2-c86d-4da5-bb51-591e09b4e66c'),
	  ('946efa37-4730-40f3-adfd-52f248559b72'),
	  ('3d6dca8c-a5bf-48db-a945-0eef87fbaec1'),
	  ('9df9bcd7-fa52-4b9a-824e-f56d7f63c9fb');
	  

INSERT INTO recommended_products(
	product_id
)

VALUES('946efa37-4730-40f3-adfd-52f248559b72'),
	  ('e59bb5a1-907b-4c31-85ff-1100108b3882'),
	  ('1bc903d6-fec1-40ce-a301-487785eb4098'),
	  ('78dfd63a-cb94-41c7-bf8b-35fc1e261dc6'),
	  ('614cbbf5-b05b-4ede-926f-861aeff41510');

INSERT INTO cart(
	product_id,
	product_count,
	user_id
)

VALUES('5e86bae2-c86d-4da5-bb51-591e09b4e66c', 3, '0de664e5-1fcf-49a3-a853-24f7df51c333');

INSERT INTO forwards(
	product_id,
	user_id
)
VALUES('21745480-afa1-4108-acda-1de16185ae78', '0de664e5-1fcf-49a3-a853-24f7df51c333');

INSERT INTO states(
	state_name
)
VALUES('Toshkent'),
      ('Samarqand'),
      ('Buxoro');

INSERT INTO regions(
	region_name,
	state_id
)
VALUES('Shayxontohur', '71733cc4-8633-44fa-a94a-8f3a3bef48fe'),
	  ('Chilonzor', '71733cc4-8633-44fa-a94a-8f3a3bef48fe'),
	  ('Olmazor', '71733cc4-8633-44fa-a94a-8f3a3bef48fe'),
	  ('Kattaqorgon', '6dc17d32-63db-4a97-87d4-c381360713ad'),
	  ('Bulungur', '6dc17d32-63db-4a97-87d4-c381360713ad'),
	  ('Mirbozor', '6dc17d32-63db-4a97-87d4-c381360713ad'),
	  ('Vobkent', '2e3cd4be-cf20-43a3-846a-bb4c136a5539'),
	  ('Rometan', '2e3cd4be-cf20-43a3-846a-bb4c136a5539'),
	  ('Olot', '2e3cd4be-cf20-43a3-846a-bb4c136a5539');

INSERT INTO comments(
	comment_body,
	comment_rate,
	product_id,
	user_id,
	created_at
)

VALUES('Yaxshi maxsulotlar', 3, 'e59bb5a1-907b-4c31-85ff-1100108b3882', '0de664e5-1fcf-49a3-a853-24f7df51c333', 'Fri Apr 09 2021 23:16:46 GMT+0500 (Uzbekistan Standard Time)');

INSERT INTO navbar(
	category_id
)

VALUES('e11d9387-3161-48ac-b182-edbc8b90548f');

INSERT INTO subcategory_menu(
	subcategory_id,
	category_id
)

VALUES('272a6f72-e7dd-4912-b131-1d4a769501e5', 'e11d9387-3161-48ac-b182-edbc8b90548f');

INSERT INTO filters_main(
	filtermain_title, 
	subcategory_id
)

VALUES('Nashr', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Nashr', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Muallif', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Muallif', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Til', '272a6f72-e7dd-4912-b131-1d4a769501e5'),
	  ('Til', '097ccc14-6d5b-442d-8feb-4b8281e4461f'),
	  ('Mavsum', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Brend', 'ba5f0f3d-a315-4c77-9544-9239399fd746'),
	  ('Mavsum', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Brend', '3dd20acf-19e1-4cf2-b70e-57a994efd20e'),
	  ('Mavsum', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e'),
	  ('Brend', '29cb5eb1-9ed5-47d3-9e67-c18dac304d9e');

INSERT INTO filter_details (
	filterdetail_title, 
	filtermain_id
)

VALUES('Hilol', '8ecdfe7f-6b91-47ec-b24b-8f48a2bb1d21'),
	  ('Hilol', 'eedc655b-3c2e-4af0-939a-7b8b53a117fd'),
	  ('Sharq', '8ecdfe7f-6b91-47ec-b24b-8f48a2bb1d21'),
	  ('Sharq', 'eedc655b-3c2e-4af0-939a-7b8b53a117fd'),
	  ('Yangi asr avlodi', '8ecdfe7f-6b91-47ec-b24b-8f48a2bb1d21'),
	  ('Yangi asr avlodi', 'eedc655b-3c2e-4af0-939a-7b8b53a117fd'),
	  ('Abdukarim Mirzayev', '65581809-d0a1-4c06-b5be-d9a8a83f9d13'),
	  ('Abdukarim Mirzayev', '087b1c52-a1b4-4371-8d42-98daba594712'),
	  ('Aziz Axrorov', '65581809-d0a1-4c06-b5be-d9a8a83f9d13'),
	  ('Aziz Axrorov', '087b1c52-a1b4-4371-8d42-98daba594712'),
	  ('Abdulla Avloniy', '65581809-d0a1-4c06-b5be-d9a8a83f9d13'),
	  ('Abdulla Avloniy', '087b1c52-a1b4-4371-8d42-98daba594712'),
	  ('Ingliz', '49904640-acde-4e83-b15f-52faabd44607'),
	  ('Ingliz', '8be23d5b-ef9d-4f87-9ebc-e17a81a5018c'),
	  ('Rus', '49904640-acde-4e83-b15f-52faabd44607'),
	  ('Rus', '8be23d5b-ef9d-4f87-9ebc-e17a81a5018c'),
	  ('O`zbek', '49904640-acde-4e83-b15f-52faabd44607'),
	  ('O`zbek', '8be23d5b-ef9d-4f87-9ebc-e17a81a5018c'),
	  ('Qish', '8a691518-227c-435b-8187-55ffbbe17bcb'),
	  ('Bahor', '8a691518-227c-435b-8187-55ffbbe17bcb'),
	  ('Yoz', '8a691518-227c-435b-8187-55ffbbe17bcb'),
	  ('Kuz', '8a691518-227c-435b-8187-55ffbbe17bcb'),
	  ('Adidas', 'cb370d04-df3e-4f30-93b3-01e0bb5e7df5'),
	  ('Nike', 'cb370d04-df3e-4f30-93b3-01e0bb5e7df5'),
	  ('Puma', 'cb370d04-df3e-4f30-93b3-01e0bb5e7df5'),
	  ('Qish', '018810ab-268e-450f-a2d6-caecabba6424'),
	  ('Bahor', '018810ab-268e-450f-a2d6-caecabba6424'),
	  ('Yoz', '018810ab-268e-450f-a2d6-caecabba6424'),
	  ('Kuz', '018810ab-268e-450f-a2d6-caecabba6424'),
	  ('Nike', 'f0d48721-a2d9-48fb-a9e5-51e27427b01e'),
	  ('Polo', 'f0d48721-a2d9-48fb-a9e5-51e27427b01e'),
	  ('Gucci', 'f0d48721-a2d9-48fb-a9e5-51e27427b01e'),
	  ('Qish', '5b4b0b01-d171-47ce-9b00-6b3d4bb06ab8'),
	  ('Bahor', '5b4b0b01-d171-47ce-9b00-6b3d4bb06ab8'),
	  ('Yoz', '5b4b0b01-d171-47ce-9b00-6b3d4bb06ab8'),
	  ('Kuz', '5b4b0b01-d171-47ce-9b00-6b3d4bb06ab8'),
	  ('Jonsons Baby', '7982fdcb-07b9-4f8a-8ee1-0f6982bf3978'),
	  ('Adidas', '7982fdcb-07b9-4f8a-8ee1-0f6982bf3978'),
	  ('Nike', '7982fdcb-07b9-4f8a-8ee1-0f6982bf3978');