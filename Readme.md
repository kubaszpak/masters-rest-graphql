# 📊 Comparison of REST and GraphQL APIs – Performance and Design

This project compares two popular API architectures — **REST** and **GraphQL** — in the context of a typical e-commerce backend. Both APIs were implemented over a shared PostgreSQL database using Prisma ORM to ensure identical data models and SQL queries.

## Master's Thesis

This repository served as the foundation for my master's thesis.
You can find the full thesis with results and conclusions [here](./Praca_magisterska%20-%2007.07.2025%20-%20Jakub%20Szpak.pdf).

## Test Scenarios

Four realistic performance tests were conducted:

1. **Fetching full product details** (simple GET request).
2. **Fetching category with associated products** (underfetching case).
3. **Fetching users and their orders** (N+1 problem).
4. **Fetching partial product data** (overfetching case).

Tests were executed locally using **Artillery**, with the database hosted remotely on Supabase.

## Key Findings

- **REST** offers better performance in simple, single-resource queries.
- **GraphQL** demonstrates advantages in more complex scenarios, allowing clients to control data structures without the need to modify endpoints.
- After optimization (e.g. using DataLoader to address the N+1 problem), GraphQL achieved comparable performance.
- Choice between REST and GraphQL should depend on project needs and API flexibility requirements.

## Developer Experience

The project also analyzes developer experience when implementing both APIs, considering ease of development and flexibility when handling evolving client requirements.
