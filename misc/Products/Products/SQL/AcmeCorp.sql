CREATE DATABASE [AcmeCorp]
GO

USE [AcmeCorp]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Product] (
    [Id]          INT             NOT NULL,
    [Name] NVARCHAR (100)  NULL,
    [Price]       NUMERIC (18, 2) NULL,
    [Color]       NVARCHAR (100)  NULL
);
GO

INSERT INTO [dbo].[Product] VALUES(1,'Bike',100.99,'Blue');
INSERT INTO [dbo].[Product] VALUES(2,'Helmet',30.99,'Yellow');
INSERT INTO [dbo].[Product] VALUES(3,'Shirt',10.99,'Red');
GO