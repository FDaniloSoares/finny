import {
  date,
  numeric,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const transactionType = pgEnum("transaction_type", [
  "DEPOSIT",
  "EXPENSE",
  "INVESTMENT",
]);

export const transactionCategory = pgEnum("transaction_category", [
  "HOUSING",
  "TRANSPORTATION",
  "FOOD",
  "ENTERTAIMENT",
  "HEALTH",
  "UTILITY",
  "SALARY",
  "EDUCATION",
  "OTHER",
]);

export const transactionPaymentMethod = pgEnum("transaction_payment_method", [
  "CREDIT_CARD",
  "DEBIT_CARD",
  "BANK_TRANSFER",
  "BANK_SLIP",
  "CASH",
  "PIX",
  "OTHER",
]);

export const transactionTable = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  type: transactionType("type").notNull(),
  category: transactionCategory("category").notNull(),
  amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
  paymentMethod: transactionPaymentMethod("payment_method").notNull(),
  date: date("date").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("update_at", {
    withTimezone: true,
  }).notNull(),
});
