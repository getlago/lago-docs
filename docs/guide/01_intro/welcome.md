---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Welcome to Lago
Lago is an **open-source billing API for product-led SaaS**. It's the best alternative to Chargebee, Recurly or Stripe Billing for companies that need to handle complex billing logics.

This library will allow you to build an entire billing system from scratch. Lago is a real-time, event-based solution made for usage-based billing, subscription-based billing, and all the nuances of pricing in between.

You can use the [self-hosted version](./self-hosting/docker) to deploy Lago on your existing infrastructure or [request access to Lago Cloud](https://calendly.com/lago-team/20min-meeting-with-lago-team?month=2022-07) to start using our solution immediately.

## Four-step billing workflow

### 1. Event ingestion
[Events](./events/ingesting_events) provide information about your customers' consumption, with the highest level of granularity. Any product feature for which you want to charge your customers should correspond to a specific event. An event can be triggered by an action or can be sent periodically. Lago is able to ingest events at scale while preventing duplicates.

### 2. Metrics aggregation
The aggregation process consists in converting events into [billable metrics](./billable-metrics/overview). There are four aggregation types:

| Aggregation    | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| COUNT          | Counts the number of times an incoming event occurs                              |
| SUM            | Calculates the sum of a predefined property for incoming events                  |
| MAX            | Returns the maximum value of a predefined property for incoming events           |
| COUNT DISTINCT | Returns the number of unique values of a predefined property for incoming events |

### 3. Pricing
Creating [plans](./plans/overview) allows you to define how much your customers should pay for using your product. You can then combine plans and billable metrics to implement any billing model (i.e. subscription-based, usage-based, or hybrid). Billable metrics may be priced differently depending on the associated plan.

### 4. Invoicing
Lago automatically generates [invoices](./invoicing/overview) for each customer according to the plan model: the subscription fee can be billed at the beginning or at the end of the billing period while usage-based charges are always calculated at the end of the billing period. Invoices include fees, taxes and customer information.