# 📊 Comparison of REST and GraphQL APIs – Performance and Design

This project compares two popular API architectures — **REST** and **GraphQL** — in the context of a typical e-commerce backend. Both APIs were implemented over a shared PostgreSQL database using Prisma ORM to ensure identical data models and SQL queries.

## Master's Thesis

This repository served as the foundation for my master's thesis.
You can find the full thesis with results and conclusions [here](./Praca_magisterska%20-%2007.07.2025%20-%20Jakub%20Szpak.pdf).

## 📦 Project Structure

The repository is divided into two main folders:

- `masters-rest/` – API built using **Express.js** (REST)
- `masters-graphql/` – API built using **Apollo Server + TypeGraphQL** (GraphQL)

Both APIs share the same data model, defined using **Prisma ORM**, and are connected to the same PostgreSQL database hosted on **Supabase**.

## Test Scenarios

Four realistic performance tests were conducted:

1. **Fetching full product details** (simple GET request).
2. **Fetching category with associated products** (underfetching case).
3. **Fetching users and their orders** (N+1 problem).
4. **Fetching partial product data** (overfetching case).

Tests were executed locally using **Artillery**.

## Key Findings

- **REST** offers better performance in simple, single-resource queries.
- **GraphQL** demonstrates advantages in more complex scenarios, allowing clients to control data structures without the need to modify endpoints.
- After optimization (e.g. using DataLoader to address the N+1 problem), GraphQL achieved comparable performance.
- Choice between REST and GraphQL should depend on project needs and API flexibility requirements.

## Developer Experience

The project also analyzes developer experience when implementing both APIs, considering ease of development and flexibility when handling evolving client requirements.

## ✅ Prerequisites

- Node.js (LTS recommended)
- PostgreSQL database (local or Supabase)
- npm
  
## Installation

- Clone the repository.
- Change directory (cd) to either `masters-rest/` or `masters-graphql/`.
- Install dependencies with: `npm install`.
- Create a .env file with DATABASE_URL connection string: `DATABASE_URL="postgresql://your_user:your_password@your_host:5432/your_database"`. Replace your_user, your_password, etc. with your actual database credentials. This should match your Supabase connection string or local PostgreSQL setup.
- Run `npx prisma db push` to generate prisma files and set up the database tables without running SQL migrations.
- Seed the database with dummy data.
- Run `npm run devz to start the project!
 
