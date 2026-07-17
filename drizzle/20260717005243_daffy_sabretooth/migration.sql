CREATE TYPE "transaction_category" AS ENUM('HOUSING', 'TRANSPORTATION', 'FOOD', 'ENTERTAIMENT', 'HEALTH', 'UTILITY', 'SALARY', 'EDUCATION', 'OTHER');--> statement-breakpoint
CREATE TYPE "transaction_payment_method" AS ENUM('CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'BANK_SLIP', 'CASH', 'PIX', 'OTHER');--> statement-breakpoint
CREATE TYPE "transaction_type" AS ENUM('DEPOSIT', 'EXPENSE', 'INVESTMENT');--> statement-breakpoint
CREATE TABLE "transaction" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(255) NOT NULL,
	"type" "transaction_type" NOT NULL,
	"category" "transaction_category" NOT NULL,
	"amount" numeric(12,2) NOT NULL,
	"payment_method" "transaction_payment_method" NOT NULL,
	"date" date NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"update_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
DROP TABLE "users";