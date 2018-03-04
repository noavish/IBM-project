-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2018-03-04 08:47:22.461

-- tables
-- Table: Products

USE fanco;
CREATE TABLE Products (
    product_id int  NOT NULL,
    product_name varchar(255)  NOT NULL,
    CONSTRAINT Products_pk PRIMARY KEY (product_id)
);

-- Table: channel
CREATE TABLE channel (
    channel_id int  NOT NULL auto_increment,
    channel_name varchar(255)  NOT NULL,
    CONSTRAINT channel_pk PRIMARY KEY (channel_id)
);

-- Table: pricing
CREATE TABLE pricing (
    item_id int  NOT NULL auto_increment,
    product_id_fk int  NOT NULL,
    sku_id_fk int  NOT NULL,
    channel_id_fk int  NOT NULL,
    item_revenue int  NOT NULL,
    CONSTRAINT pricing_pk PRIMARY KEY (item_id)
);

-- Table: sales
CREATE TABLE sales (
    sale_id int  NOT NULL auto_increment,
    date date  NOT NULL,
    time time  NOT NULL,
    country varchar(255)  NOT NULL,
    state varchar(255)  NOT NULL,
    city varchar(255)  NOT NULL,
    weather varchar(255)  NOT NULL,
    product_id_fk int  NOT NULL,
    item_id_fk int  NOT NULL,
    sales_count int  NOT NULL,
    user_id_fk int  NOT NULL,
    CONSTRAINT sales_pk PRIMARY KEY (sale_id)
);

-- Table: sku
CREATE TABLE sku (
    sku_id int  NOT NULL auto_increment,
    sku_name varchar(255)  NOT NULL,
    product_id_fk int  NOT NULL,
    CONSTRAINT sku_pk PRIMARY KEY (sku_id)
);

-- Table: users
CREATE TABLE users (
    user_id int  NOT NULL auto_increment,
    username varchar(255)  NOT NULL,
    email varchar(255)  NOT NULL,
    channel_id_fk int  NOT NULL,
    level varchar(255)  NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (user_id)
);

-- foreign keys
-- Reference: SKU_Products (table: sku)
ALTER TABLE sku ADD CONSTRAINT SKU_Products
    FOREIGN KEY (product_id_fk)
    REFERENCES Products (product_id)  
    
;

-- Reference: pricing_Products (table: pricing)
ALTER TABLE pricing ADD CONSTRAINT pricing_Products
    FOREIGN KEY (product_id_fk)
    REFERENCES Products (product_id)  
    
;

-- Reference: pricing_SKU (table: pricing)
ALTER TABLE pricing ADD CONSTRAINT pricing_SKU
    FOREIGN KEY (sku_id_fk)
    REFERENCES sku (sku_id)  
    
;

-- Reference: pricing_channel (table: pricing)
ALTER TABLE pricing ADD CONSTRAINT pricing_channel
    FOREIGN KEY (channel_id_fk)
    REFERENCES channel (channel_id)  
    
;

-- Reference: sales_Products (table: sales)
ALTER TABLE sales ADD CONSTRAINT sales_Products
    FOREIGN KEY (product_id_fk)
    REFERENCES Products (product_id)  
;

-- Reference: sales_pricing (table: sales)
ALTER TABLE sales ADD CONSTRAINT sales_pricing
    FOREIGN KEY (item_id_fk)
    REFERENCES pricing (item_id)  
    
;

-- Reference: sales_users (table: sales)
ALTER TABLE sales ADD CONSTRAINT sales_users
    FOREIGN KEY (user_id_fk)
    REFERENCES users (user_id)  
    
;

-- Reference: users_channel (table: users)
ALTER TABLE users ADD CONSTRAINT users_channel
    FOREIGN KEY (channel_id_fk)
    REFERENCES channel (channel_id)  
    
;

-- End of file.

