---

    title: Requirements
    description: 

---

# Requirements

You can run `Edgeable` in a single-node cluster or create a horizontally scalable high-availability cluster.
Check the [benchmark](./benchmarks.md) to see the differences.

## Services

- S3 Compatible storage provider
    - AWS S3
    - R2
- Database
    - MySQL
    - MariaDB
    - Postgres
    - MongoDB
    - SQL Server
- Redis
- Realtime Database
    - Clickhouse

## Hardware

### Single-node instance

`Edgeable` is capable of running in a single-node cluster providing a very good results.
In a single-node instance you're going to run on `docker-compose.yml` file that is going to
compose all the needed service into one config file.

### Hardware

| Spec | Minimum | Recommended | 
|:-----|---------|-------------| 
| CPU  | 1       | 4           |
| RAM  | 1GB     | 8GB         |
| SDD  | 25GB    | 120GB       |

### High-availability instance

When deploying high-availability cluster version of `Edgeable` you'll separate the cluster like so:

| Server     | Minimum                       | Recommended                    |
|------------|-------------------------------|--------------------------------|
| Database   | 4 `cpu` / 8 `ram` / 160 `sdd` | 8 `cpu` / 16 `ram` / 320 `sdd` |
| Redis      | 2 `cpu` / 16 `ram` / 50 `sdd` | 4 `cpu` / 32 `ram` / 100 `sdd` |
| Database   | 2 `cpu` / 4 `ram` / 160 `sdd` | 4 `cpu` / 8 `ram` / 160 `sdd`  |
| Serverless | 1 `cpu` / 2 `ram` / 160 `sdd` | 8 `cpu` / 16 `ram` / 320 `sdd` |

- _Notice that only the `Serverless` server is the one who is being horizontally scaled._
- _In critical-application it's recommend to use managed versions of your selected database and redis, the
  reason for that is `Edgeable` is not aiming to deliver HA versions of them._

## Docker Swarm & K8S.

TBD
