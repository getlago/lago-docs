---
sidebar_position: 1
---

# Overview

**Billable metrics** define how incoming events are aggregated to appear as a paying feature of your company.

Defining Billable metrics must be made through the user interface, by defining: 
- A `name`;
- A `code`. This code will be used as the event name sent from your backend;
- A `description` *(optional)*;
- An `aggregation type`, defining how this billable metric must be ingested at the end of the billable period.

To fully understand the rules of aggregation and how Lago calculates incoming events, let's dig on all the [aggregation rules](./aggregation-types).

