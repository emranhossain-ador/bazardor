
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const databaseUrl = process.env.BETTER_AUTH_DB_URL;

if (!databaseUrl) {
    throw new Error("BETTER_AUTH_DB_URL is missing");
}

const globalForMongo = globalThis as typeof globalThis & {
    mongoClient?: MongoClient;
};

const client =
    globalForMongo.mongoClient ?? new MongoClient(databaseUrl);

if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClient = client;
}

const db = client.db("bazardor");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true,
    },
});

