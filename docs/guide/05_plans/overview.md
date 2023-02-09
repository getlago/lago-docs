---
sidebar_position: 1
---

# Overview
While billable metrics are used to measure customer usage, plans are used to apply prices to this usage.

Defining billiable metrics is not mandatory to create plans. It is possible to create subscription-based plans that don't include usage-based charges.

## Plan structure
1. Basic information:
    - Name;
    - Code;
    - Description;
2. [Plan model](./plan-model):
    - Billing interval (e.g. monthly, yearly, weekly);
    - Fixed recurring amount;
    - Currency;
    - Boolean to define whether the plan should be paid in advance;
    - Trial period in days;
3. [Additional charges](./charges) (associated with billable metrics):
    - Charge model (e.g. standard, graduated, percentage, package, volume); and
    - Charge amount.

You can create plans via the user interface or [the API](../../api/plans/create-plan).