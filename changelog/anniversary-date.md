---
date: 2022-08-23T11:00
---

# Anniversary dates for subscriptions
When assigning a plan to a customer, you can now choose whether the subscription should be renewed at the beginning of the period or on its anniversary date.

For instance, if a monthly plan is assigned to a customer on August 10th and you choose to align the billing cycle with the anniversary date of the subscription, the customer will be billed every 10th of the month.

With [the API](../docs/api/subscriptions/create-subscription#arguments), you can use the `billing_time` attribute to choose your preferred option. If not provided, Lago will base the subscription on calendar periods.

[Learn more](../docs/guide/plans/subscription)