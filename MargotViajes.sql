-- tables


-- Table: Agency
CREATE TABLE exf_Agency (
    agency_id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    address varchar(255) NULL,
    photo varchar(255) NULL,
    telephone int NOT NULL,
    CONSTRAINT Agency_pk PRIMARY KEY (agency_id)
);

-- Table: Treeps
CREATE TABLE exf_Treeps (
    treep_id int NOT NULL AUTO_INCREMENT,
    price int NOT NULL,
    destiny_name varchar(50) NULL,
    description varchar(255) NULL,
    photo varchar(255) NULL,
    CONSTRAINT Viajes_pk PRIMARY KEY (treep_id)
);

-- Table: Dates
CREATE TABLE exf_Dates (
    date_id int NOT NULL AUTO_INCREMENT,
    leaving_date varchar(30) NOT NULL,
    return_date varchar(255) NULL,
    transportation varchar(255) NULL,
    duration varchar(255) NULL,
    CONSTRAINT Dates_pk PRIMARY KEY (date_id)
);

-- Table: Clients
CREATE TABLE exf_Clients (
    client_id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    last_second_name varchar(20) NOT NULL,
    contact varchar(100) NULL,
    photo varchar(255) NULL,
    CONSTRAINT Clients_pk PRIMARY KEY (client_id)
);
