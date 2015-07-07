var query = "
/*==============================================================*/
/* Table: AKUN                                                  */
/*==============================================================*/
create table AKUN
(
   ID                   int not null,
   NAMA                 varchar(30) not null,
   TTL                  varchar(40) not null,
   JK                   char(1) not null,
   primary key (ID)
);

/*==============================================================*/
/* Table: CATATAN                                               */
/*==============================================================*/
create table CATATAN
(
   ID_AKUN              int not null,
   TANGGAL              date not null,
   CATATAN              text not null
);

/*==============================================================*/
/* Table: LAPORAN                                               */
/*==============================================================*/
create table LAPORAN
(
   ID_AKUN              int not null,
   WAKTU                int not null,
   KOMUNIKASI           int not null,
   SOSIAL               int not null,
   KOGNITIF             int not null,
   KEBIASAAN            int not null,
   TOTAL                int not null
);

/*==============================================================*/
/* Table: NILAI                                                 */
/*==============================================================*/
create table NILAI
(
   ID_AKUN              int not null,
   LEVEL                int not null,
   KATEGORI             varchar(15) not null,
   PILIHAN              varchar(15) not null,
   BENAR                int not null,
   SALAH                int not null,
   DATA                 varchar(30) not null,
   TANGGAL              date
);

alter table CATATAN add constraint FK_MEMILIKI foreign key (ID_AKUN)
      references AKUN (ID) on delete restrict on update restrict;

alter table LAPORAN add constraint FK_MEMPUNYAI foreign key (ID_AKUN)
      references AKUN (ID) on delete restrict on update restrict;

alter table NILAI add constraint FK_MENDAPAT foreign key (ID_AKUN)
      references AKUN (ID) on delete restrict on update restrict;
";