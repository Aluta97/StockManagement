use stockManagement;

      drop table if exists clinics;
      drop table if exists medicine;
      drop table if exists clinic_stock;

create table clinics (
  id int primary key auto_increment,
  name char(50) not null,
  phoneNUmber char (20) not null
);

create table medicine (
  id int primary key auto_increment,
  name char(50) not null,
  strength char(20) not null
);

create table clinic_stock (
  id int primary key auto_increment,
  quantity int,
  clinic_id int,
  med_id int,
  foreign key (clinic_id) references clinics(id),
  foreign key (med_id) references medicine(id)
);
