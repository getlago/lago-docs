---
date: 2022-09-08T10:00
---

# Recurring count
Companies with fair and transparent pricing models are often praised by customers. If you are considering implementing seat-based pricing for instance, the `reccuring_count` aggregation is exactly what you need.

This new aggregation type allows you to push events for persistent units.

Consider the following example:

>Your customer is on a monthly plan and adds a new user to their account on September 15th, so you generate an event that corresponds to one billing unit.
>
>At the end of September, Lago will automatically create a prorated charge for this user, based on the number of days of activity (i.e. from September 15th to September 30th).
>
>This billing unit will remain valid until you generate another event to remove it. For instance, if your customer deletes the user on October 22nd, Lago will create another prorated charge for the period October 1st to October 22nd.

Consult [our guide](../docs/guide/billable-metrics/aggregation-types#persistent-aggregation-types) to learn more about persistent units.