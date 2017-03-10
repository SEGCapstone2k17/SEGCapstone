--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

ALTER TABLE ONLY public."Project" DROP CONSTRAINT "fk_customer_ID";
ALTER TABLE ONLY public."Contract" DROP CONSTRAINT "FK_Project_ID";
ALTER TABLE ONLY public."Contract" DROP CONSTRAINT "FK_Customer_ID";
ALTER TABLE ONLY public."Project" DROP CONSTRAINT "Project_pkey";
ALTER TABLE ONLY public."Customer" DROP CONSTRAINT "Customer_pkey";
ALTER TABLE ONLY public."Contract" DROP CONSTRAINT "Contract_pkey";
DROP TABLE public."Project";
DROP SEQUENCE public.project_id_seq;
DROP TABLE public."Customer";
DROP SEQUENCE public.customer_id_seq;
DROP TABLE public."Contract";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Contract; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Contract" (
    "Customer_ID" integer NOT NULL,
    "Project_ID" integer NOT NULL,
    "Start_Date" date,
    "End_Date" date,
    "Description" text
);


ALTER TABLE "Contract" OWNER TO postgres;

--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE customer_id_seq OWNER TO postgres;

--
-- Name: Customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Customer" (
    "Customer_ID" integer DEFAULT nextval('customer_id_seq'::regclass) NOT NULL,
    "First_Name" character varying(16),
    "Last_Name" character varying(16),
    "Title" character varying(12),
    "Gender" character varying(12)
);


ALTER TABLE "Customer" OWNER TO postgres;

--
-- Name: project_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE project_id_seq OWNER TO postgres;

--
-- Name: Project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Project" (
    "Project_ID" integer DEFAULT nextval('project_id_seq'::regclass) NOT NULL,
    "Cost" real,
    "Description" text,
    "Name" character varying(64),
    "Currency" character varying(8),
    "Customer_ID" integer
);


ALTER TABLE "Project" OWNER TO postgres;

--
-- Data for Name: Contract; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Contract" ("Customer_ID", "Project_ID", "Start_Date", "End_Date", "Description") FROM stdin;
2	3	2009-11-11	2009-12-03	John Smith needs wooden floors installed by the before the holidays
3	1	2013-04-02	2013-05-03	Jane needs red shingles shingles before August
1	2	2008-01-23	2008-02-20	Joe Bob requested to have the blue shingles done by the end of February.
\.


--
-- Data for Name: Customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Customer" ("Customer_ID", "First_Name", "Last_Name", "Title", "Gender") FROM stdin;
1	Joe	Bob	Mr.	Male
2	John	Smith	Mr.	Male
3	Jane	Smith	Mrs.	Female
5	Patrick	Olioli	Mr.	Male
6	Kelly	Adala	Ms.	Female
7	Tyler	James	Undisclosed	Undisclosed
8	Tyler	James	Undisclosed	Undisclosed
9	Arral	Gurr	Undisclosed	Undisclosed
10	Rick	Jerrysun	Undisclosed	Undisclosed
0	empty	empty	empty	empty
11	Apple	Sandwich	Undisclosed	Undisclosed
\.


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Project" ("Project_ID", "Cost", "Description", "Name", "Currency", "Customer_ID") FROM stdin;
2	2309	Replace current roof shingles with blue shingles	Roofing - Blue Shingles	CAD	1
1	1393	This is a random description of the project	Roofing - Red Shingles	CAD	3
3	15000	Floor replacement from rugs to cedar wood floors	Flooring - Wood Flooring Installation	CAD	2
4	5060	A customer needs a window upgrade before the winter	Window Replacement	CAD	\N
5	12000	A customer needs to expand their house by 1000 square feet	House Expansion	CAD	\N
6	1400	A customer wishes to have their door replaced with a modern era door...	Door - Replacement	CAD	\N
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('customer_id_seq', 11, true);


--
-- Name: project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('project_id_seq', 6, true);


--
-- Name: Contract Contract_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Contract"
    ADD CONSTRAINT "Contract_pkey" PRIMARY KEY ("Customer_ID", "Project_ID");


--
-- Name: Customer Customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Customer"
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("Customer_ID");


--
-- Name: Project Project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("Project_ID");


--
-- Name: Contract FK_Customer_ID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Contract"
    ADD CONSTRAINT "FK_Customer_ID" FOREIGN KEY ("Customer_ID") REFERENCES "Customer"("Customer_ID");


--
-- Name: Contract FK_Project_ID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Contract"
    ADD CONSTRAINT "FK_Project_ID" FOREIGN KEY ("Project_ID") REFERENCES "Project"("Project_ID");


--
-- Name: Project fk_customer_ID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Project"
    ADD CONSTRAINT "fk_customer_ID" FOREIGN KEY ("Customer_ID") REFERENCES "Customer"("Customer_ID");


--
-- PostgreSQL database dump complete
--

