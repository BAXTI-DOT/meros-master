CREATE DATABASE meros;

CREATE TABLE categories (
	category_id uuid default uuid_generate_v4() not null primary key,
	category_name character varying(64) not null
);

CREATE TABLE sub_categories(
	subcategory_id uuid default uuid_generate_v4() not null primary key,
	subcategory_name character varying(128) not null,
	category_id uuid not null references categories (category_id)
);

CREATE TABLE sub_classes(
	subclass_id uuid default uuid_generate_v4() not null primary key,
	subclass_name character varying(128) not null,
	subcategory_id uuid not null references sub_categories (subcategory_id),
	category_id uuid not null references categories (category_id)
);

CREATE TABLE products (
	product_id uuid default uuid_generate_v4() not null primary key,
	product_name character varying(128) not null,
	product_price bigint not null,
	category_id uuid not null references categories (category_id),
	subcategory_id uuid not null references sub_categories (subcategory_id)
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
	product_id uuid not null references products (product_id),
	user_id uuid not null references users (user_id)
);

CREATE TABLE new_products(
	newproduct_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products (product_id)
);

CREATE TABLE new_products_title (
	title_id uuid default uuid_generate_v4() not null primary key,
	title_name character varying(128) not null,
	category_id uuid not null references categories (category_id)
);

CREATE TABLE gift_products(
	giftproduct_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products(product_id)
);

CREATE TABLE gift_products_title (
	title_id uuid default uuid_generate_v4() not null primary key,
	title_name character varying(128) not null,
	category_id uuid not null references categories (category_id)
);

CREATE TABLE best_offers (
	bestoffer_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products(product_id)
);

CREATE TABLE recommended_products (
	recommended_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products(product_id)
);

CREATE TABLE cart(
	cart_id uuid default uuid_generate_v4() not null primary key,
	product_id uuid not null references products (product_id),
	product_count int not null,
	user_id uuid not null references users (user_id)
);

CREATE TABLE states(
	state_id uuid default uuid_generate_v4() not null primary key,
	state_name character varying(128) not null
);

CREATE TABLE regions(
	region_id uuid default uuid_generate_v4() not null primary key,
	region_name character varying(128) not null,
	state_id uuid not null references states (state_id)
);
