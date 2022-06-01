---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Welcome to Lago
Lago is an open-source Stripe Billing alternative.

This library will allow you to build an entire billing logic from scratch, even the most complex one. Lago is a real-time event-based library made for usage-based billing, subscription-based billing, and all the nuances of pricing in between.

You can decide to use Lago in its **[self-hosted version](./self-hosting/docker)** or in its **cloud version (fully hosted by Lago)**, currently available on a per request basis. Request access to Lago Cloud [here](https://pktz41848np.typeform.com/to/t4boMDXm).

## Four-step billing workflow

### 1. Event ingestion
[Events](./ingesting-events) provide information about your customers' consumption, with the highest level of granularity. Any product feature for which you want to charge your customers should correspond to a specific event. An event can be triggered by an action or can be sent periodically. Lago is able to ingest events at scale while preventing duplicates.

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
An [invoice](./invoicing/overview) is generated for each customer at the end of the billing period, as defined in the corresponding plan. Invoices include fees, taxes and customer information.

## Next steps
Before you can start defining usage metrics and pricing plans, you must [deploy Lago locally](./self-hosting/docker).