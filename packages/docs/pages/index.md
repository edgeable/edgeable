---

    title: What is Edgeable
    description: 
    outline: 'deep'

---

# What is Edgeable?

Edgeable is enterprise-grade Serverless - "edge-able" - cloud function.

With Edgeable you can easily deploy a cloud function to be executed over the edge.
Using Edgeable regularly can help with building Request-Intensive-Applications (RIA) while adapting `micro-servicing` and `separation of concerns` mindsets.

:::info In short
With Edgeable you can worry more about code, and less about infrastructure.
:::

## ⚡️ Features

No matter if your planning to use Edgeable in a Single-node-instance (SNI) or in a High-availability-cluster (HAC). Edgeable can handle both.

Edgeable is very flexible, it can run perfectly on a low-budget server with:
- 1 vCPU
- 1GB RAM
- 25GB SDD

Or, you can expand and scale your Edgeable cluster up to an imaginary numbers.

### Ready-to-use (RTU) & Bare-bone (BB) Workers.

Every Edgeable runtimes can be used in one of two ways.

### BB Workers

Bare-bone workers runs with the most striped-out runtimes you'll ever find out there.

With BB workers you are in charge, you're in control! meaning you can run any code on the edge, as long it exports runnable server at port `3000`.

----

### RTU Workers

A ready-to-use workers are workers that already include the necessary server code for you.

What you need to do? develop your amazing computation logic with a pre-determined function and let
Edgeable give you full access to:

- Environment variables.
- Global Durable KV objects.

----

### Global durable KV Objects (DKO).

A durable `hashmap` objects to be share with any pre-defined functions.

With DKO you can share key-value information quickly between functions, and even, between runtimes!

----

### Live editor.

It's always best to use the [CLI](./via-cli.md) or some [GitHub](./via-github.md) method to deploy your function.

But, for any case that you need to alter function code on the fly, Edgeable live editor will let you do it on the spot.

----

### Queue manager.

With the option to create queue-driven workers it's very easy to response to your user in no-time!
The rest of the process is added to a smart queue manager and will be executed asynchronously in the background.

----

### Cron job - scheduler.

Set a time for a given function, and it will be executed then. only then!

----

### Push to deploy.

Want to have a better grasp on your deployment pipeline? use any of the GitHub method
to let your function update on push, or, as part of CI/CD pipeline.

----

### Rate limiter.

No one like stalkers, to much request in a given time-period? sorry we are close for business right now

----

### Integrity check.

Edgeable likes to be certain to who are giving our information.

For that Edgeable uses a variety of common-techniques to make sure that the resource who's requesting executing a function is indeed entitled to do so,
and that is integrity is intact.

----

### Uses Prisma ORM for a wide variety of DB engines.

By using [Prisma](https://www.prisma.io/) Edgeable makes sure you can use your favorite database.

Prisma supports:

- [PostgresSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [SQL Lite](https://www.sqlite.org/index.html)
- [MongoDB](https://www.mongodb.com/)
- [MariaDB](https://mariadb.com/)
- [PlanetScale](https://planetscale.com/)
- [CockroachDB](https://www.cockroachlabs.com/)

::: info
**PlanetScale** and **CockroachDB** are managed service with some pretty generous free-tier.
:::
