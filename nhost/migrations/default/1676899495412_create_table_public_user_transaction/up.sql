CREATE TABLE "public"."user_transaction" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "transactionId" text, "userId" uuid, "workspaceId" uuid, "delay" text, "payload" json NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("transactionId"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
