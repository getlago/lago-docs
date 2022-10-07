---
date: 2022-10-06T11:00
---

# Customer currency
It is now possible to define the currency at [customer](/docs/api/customers/customer-object) level.

The currency associated with each customer was previously defined by the currency of the plan assigned to the customer. This logic prevented users from assigning a coupon or an add-on to a customer before creating a subscription.

When creating a new customer via the user interface or the API, you can now select the currency associated with the customer. If the currency is not defined at customer level, it will be determined by the first object assigned to the customer (i.e. currency of the plan, add-on, coupon, or wallet).

:::caution
Once an object has been assigned to the customer (i.e. plan, add-on, coupon, or wallet), the currency associated with the customer cannot be changed.
:::