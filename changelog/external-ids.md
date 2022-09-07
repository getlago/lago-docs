---
date: 2022-09-07T11:00
---

# API changes - External IDs
We are introducing changes to the API that will make it easier to manage subscriptions:
- For the [creation of new subscriptions](../docs/api/subscriptions/create-subscription), `subscription_id` and `unique_id` will be removed and replaced with `external_id` (required); and
- For all other endpoints, `subscription_id` will be replaced with `external_subscription_id`.

This will allow you to operate via the API using your own identifiers and save you the trouble for storing our IDs.

In addition to this, for consistency purposes:
- For the [creation of new customers](../docs/api/customers/create-update-customer), `customer_id` will be replaced with `external_id`; and
- For all other endpoints, `customer_id` will be replaced with `external_customer_id`.

These changes will come into effect on **September 8, 2022**.

Please [get in touch](https://www.getlago.com/slack) with our team if you have any questions.