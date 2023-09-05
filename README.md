## Description

Calculate the following discounts for booking a theater ticket:

- Adult: $ 40.00
- Kids(0 / 7): $ 15.00
- Students(Student Card): $ 20.00
- Senior(high than 65 years old): $ 20.00

**Capacity: 30 seats!**

### Mondays:
    25% off for everyone

### Tuesdays:
    15% off for Senior
    15% off for Kids;

### Wednesday:
    50% off for everyone

### Thursdays:
    25% off Senior
    25% off Adult

### Fridays
    50% off% Kids

### Sundays/Saturdays/Holidays
    non-discounts

## Change Request

- Calculate ticket prices(person types Vs. weekdays)
- Control the capacity (avoid overbooking)
- Audit:
    - Each purchase request should be persisted(append only)
        - Log file (request json object)
    - Each purchase confirmation should be persisted(append only)
        - In memory DB ({ "seats_amound" , "timestamp" })
        
- Extras
    - Extends the app to offer ticket for footbal
        - Capacity 500.000
        - Purchase confirmation using CSV

## Stack

- [NestJS](https://nestjs.com) framework
- TypeScript / ES2017
- [Class-Validator](https://www.npmjs.com/package/@nestjsi/class-validator) for basic validations
- [OpenAPI](https://www.openapis.org/) / [Swagger](https://swagger.io/) for REST documentation

## Architecture / Design

The project uses [Hexagonal/Ports and Adapters](https://alistair.cockburn.us/hexagonal-architecture) architecture principles and follows a [DDD](https://www.domainlanguage.com/ddd/) approach to better desing the domain logic

The project organization follows the below idea.

```bash
    .
    ├── src/loan            # Loan module
    │   ├── application     # All Loan HTTP interfaces
    │   ├── domain          # All core logic/objects/business
    │   └── infrastructure  # All integration components
    └── test                # e2e testing
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Running the app using Docker

```bash
$ docker-compose up

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# REST API Documentation

You can check the api documentation endpoint by accessing `http://localhost:3000/api/docs`

## License

Nest and APR-VEHICLE-LOAN are [MIT licensed](LICENSE).
