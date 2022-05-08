---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Welcome to Lago
Lago is an open-source Stripe Billing alternative. 

By implementing this library, you are able to build an entire billing logic from zero to hero, even the most complex one. Lago is a real-time event-based library made for usage-based billing, metered billing, subscription-based billing, and all the nuances of pricing in between.

## Four-step billing workflow

### 1. Events ingestion
By ingesting events into Lago, you send the consumption of your clients at scale. You can send anything that is happening in your product, with the highest granularity. You can also use events to send a daily summary for one of your feature that is being charged. Any features that you want your customers to pay should be a specific event.

### 2. Billable Metrics aggregation
``Billable Metrics`` aggregation is the way we translate your events into a real billable metric that can be charge at the end of a billable period. You can:
- ``COUNT`` count the number of times an incoming event occurs
- ``SUM`` sum a defined property for incoming events
- ``MAX`` get the maximum value of a defined property for incoming events
- ``COUNT DISTINCT`` get the number of unique value of a defined property for incoming events

### 3. Pricing definition
Pricing represents how much a customer should pay based on the consumption. Each ``Billable metric`` can be priced differently regarding the ``Plan`` a customer belongs to.

### 4. Invoicing creation
Invoicing occurs at the end of the billing period, regarding the ``Plan`` a customer belongs to. Invoices detail all the usage a customer should pay for, alongside the total amount and the applied taxes to pay.

## Next steps
Before ingesting events and define your usage metrics, you must [deploy Lago locally](../guide/self-hosting/installation). 