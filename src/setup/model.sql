CREATE DATABASE meros;

CREATE TABLE categories (
	category_id uuid default uuid_generate_v4() not null primary key,
	category_name character varying(64) not null,
	is_navbar boolean default false,
	is_popular boolean default false
);

CREATE TABLE sub_categories(
	subcategory_id uuid default uuid_generate_v4() not null primary key,
	subcategory_name character varying(128) not null,
	category_id uuid not null references categories (category_id) ON DELETE CASCADE
);

CREATE TABLE sub_classes(
	subclass_id uuid default uuid_generate_v4() not null primary key,
	subclass_name character varying(128) not null,
	subcategory_id uuid not null references sub_categories (subcategory_id) ON DELETE CASCADE,
	category_id uuid not null references categories (category_id) ON DELETE CASCADE
);

CREATE TABLE products (
	product_id uuid default uuid_generate_v4() not null primary key,
	product_name character varying(128) not null,
	product_price bigint not null,
	category_id uuid not null references categories (category_id) ON DELETE CASCADE,
	subcategory_id uuid not null references sub_categories (subcategory_id) ON DELETE CASCADE,
	subclass_id uuid not null references sub_classes (subclass_id) ON DELETE CASCADE,
	is_sale boolean default false,
	is_gift boolean default false,
	is_recommended boolean default false,
	is_new boolean default false,
	is_best boolean default false,
	sale_amount int,
	product_amount int not null,
	product_definition varchar(256) not null 
);

CREATE TABLE users (
	user_id uuid default uuid_generate_v4() not null primary key,
	user_name character varying(128) not null,
	user_number varchar(128) not null,
	user_password varchar(128) not null,
	user_created_at timestamptz default CURRENT_TIMESTAMP
);

create unique index main_contact on users(user_number);

CREATE TABLE forwards(
	forward_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products (product_id) ON DELETE CASCADE,
	user_id uuid not null references users (user_id) ON DELETE CASCADE
);

CREATE TABLE cart(
	cart_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products (product_id) ON DELETE CASCADE,
	product_count int not null,
	user_id uuid not null references users (user_id) ON DELETE CASCADE
);

CREATE TABLE states(
	state_id uuid default uuid_generate_v4() not null primary key,
	state_name character varying(128) not null
);

CREATE TABLE regions(
	region_id uuid default uuid_generate_v4() not null primary key,
	region_name character varying(128) not null,
	state_id uuid not null references states (state_id) ON DELETE CASCADE
);

CREATE TABLE comments(
	comment_id uuid not null default uuid_generate_v4() primary key,
	comment_body varchar(256) not null,
	comment_rate int default 1,
	product_id uuid not null references products(product_id) ON DELETE CASCADE,
	user_id uuid not null references users(user_id) ON DELETE CASCADE,
	created_at timestamptz default current_timestamp
);

CREATE TABLE filters_main(
	filtermain_id uuid not null default uuid_generate_v4() primary key,
	filtermain_title character varying(128) not null,
	subcategory_id uuid not null references sub_categories (subcategory_id) ON DELETE CASCADE
);

CREATE TABLE filter_details(
	filterdetail_id uuid not null default uuid_generate_v4() primary key,
	filterdetail_title character varying(128) not null,
	filtermain_id uuid not null references filters_main(filtermain_id) ON DELETE CASCADE
);

-- CREATE TABLE product_images(
-- 	image_id uuid not null default uuid_generate_v4() primary key,
-- 	image_link varchar(128) not null,
-- 	image_path varchar(128) not null,
-- 	mimetype varchar(128) not null,
-- 	product_id uuid not null references products(product_id) ON DELETE CASCADE,
-- 	image_name varchar(128) not null
-- );

CREATE TABLE product_images(
	image_id uuid not null default uuid_generate_v4() primary key,
	image_link varchar(256) not null,
	product_id uuid not null references products (product_id) ON DELETE CASCADE
);

CREATE TABLE filtered (
	filtered_id uuid not null default uuid_generate_v4() primary key,
	product_id uuid not null references products(product_id) ON DELETE CASCADE,
	filter_id uuid not null references filter_details(filterdetail_id) ON DELETE CASCADE
);

CREATE TABLE orders(
	order_id uuid default uuid_generate_v4() not null primary key,
	state_id uuid not null references states(state_id),
	region_id uuid not null references regions(region_id),
	order_address varchar(256) not null,
	order_person varchar(128) not null,
	order_phone varchar(128) not null,
	order_status boolean default false,
	order_number bigserial,
	order_sum varchar(48) not null,  
	order_created_at timestamptz default CURRENT_TIMESTAMP,
	user_id uuid not null references users (user_id) ON DELETE CASCADE
);

CREATE TABLE order_details(
	order_detail_id uuid not null default uuid_generate_v4() primary key,
	product_id uuid not null references products (product_id) ON DELETE CASCADE,
	product_count int not null,
	order_id uuid not null references orders(order_id) ON DELETE CASCADE
);