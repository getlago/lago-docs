---
sidebar_position: 1
---

# Overview
If Billable metrics are made to measure customer usage, **Plans are made to apply prices to this usage**.

Note that you don't need to define a Billable metric to create a Plan. However, if you have usage feature to charge, the price of your Billable metrics is defined inside each Plan. Make sure to understand [how to create a Billable metric](../billable-metrics/overview.md) first.

## Plan structure
A Plan defines the features your customers have access to, the prices paid to access them and the invoicing cadence.
In order to invoice a Customer with Lago, you must [assign a Plan to a customer](#create-a-subscription-assigning-a-customer-to-a-plan). 

**But first, let's define the structure of a Plan:**
1. [The Plan basic informations](#plan-structure)
    - A Plan `name`
    - A Plan `code`
    - A Plan `description`
2. [The Plan model](./plan-model.md)
    - A Plan `interval`
    - A Plan base `amount` with the `currency`
    - Boolean to define if the Plan is `pay in advance`
    - A Plan `trial period` in days
3. [The additional charges](./charges.md) for this Plan (any Billable metrics that have been created)
    - A Charge `model`
    - A Charge `amount` and its `currency` (automatically inherited from the currency of the Plan)

:::info
All Plans and their charges **must be defined from the UI of the Lago application**.
:::

## Editing and deleting Plans
Plans can be edited and deleted only if they are not linked to a Customer (meaning there is no active [subscription](./subscription.md) for this Plan).

If you want to make a change to a Plan already linked to a Customer, you have 2 options: 
1. Remove all active subscriptions
2. Create a new Plan