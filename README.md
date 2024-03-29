# Spring 2024, CS3200 (Database Design) Project 1

Preview the website at [**nearbyprices.asahoo.dev**](https://nearbyprices.asahoo.dev) (work in progress)

## Problem/Solution

`Problem`: For stores (especially local stores like Asian grocery stores) in a neighborhood/city without online platforms, it is hard for the user to know which store has the cheapest price for a product.\
\
`Solution`: An application where users can upload prices of common things whenever they go to any store.

- Other users can then see the prices/unit for each store and then decide where to go.
- It will also have features that will help \the user discover the best prices.
- Basically, it's crowdsourced price tracking for offline stores.

## Table of Contents

- [Requirements Document](Requirements.pdf) (Contains requirements, rules, both diagrams, relational schema, etc.)
- [UML Class diagram](uml_diagram.png)
- [Crow's Foot ERD](crows_foot_erd.png)
- [SQL CREATE Statement](database/create_table.sql)
- [SQL Sample Data (Mockaroo) INSERT Statements](https://github.com/anish-sahoo/NearbyPrices/tree/main/database/mockaroo_data)
- [SQL Queries](database/queries/)
  - [Query with subquery](database/queries/get_items.sql)
  - [Join of 3+ tables](database/queries/get_stores_for_item.sql)
  - [A lot of aggregate functions](database/queries/get_statistics_categories.sql)
  - [Query with GROUP BY and HAVING](database/queries/most_expensive_stores.sql)
  - [Query with CASE/WHEN](database/queries/inventory_size.sql)
  - [Query with complex criterion and COALESCE](database/queries/location_query.sql)

## Try it out

To set this project up, run these commands in a terminal: (ensure to have [Node.js](https://nodejs.org/) installed)

```bash
git clone https://github.com/anish-sahoo/NearbyPrices.git
cd NearbyPrices
npm install
```

Then use `npm start` to run the project.

`npm start` runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.

---

### This project was created using [Vite](https://vitejs.dev/), and uses [TailwindCSS](https://tailwindcss.com/) & [NextUI](https://nextui.org/).
