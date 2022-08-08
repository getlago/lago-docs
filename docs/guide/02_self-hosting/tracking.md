---
sidebar_position: 2
---

# Tracking & Analytics

## Why does Lago need metrics
We decided to open-source the billing API we would have dreamt to use. As a consequence of building a self hosted product, we are not able to easily collect any usage metrics or insights to help us build a better product. This analytic help us understand crucial behaviors and ship better quality to serve your needs.

We decided to track, by default, so basic behaviors and metrics that are important to understand the usage of Lago. We have built a minimum required tracking plan to minimize the security impact of collecting those events. All the metrics collected are listed in a further section. We make this as transparent as possible, and we don't track sensitive information (amounts or personal information).

The metrics are collected through the server side Ruby source from [Segment.com](https://segment.com/docs/connections/sources/catalog/libraries/server/ruby/).

## Opting-out
As detailed previously, we ask you to keep as much as possible those tracked metrics, unless you have a specific reason to opt-out. Keeping the metrics enabled is the easiest way for Lago to get feedback based on the product usage.

In the case you need to remove it, we've created a very easy process to opt out. In the environment variables, by passing the field `LAGO_DISABLE_SEGMENT` to `true`, you prevent the entire tracking logic to run in your application.

## Detail of metrics collected by Lago
This event flow enables Lago to understand the full activation flow, from the registration to the first invoice generated.

- `organization_registered`: when you create your organization by signing up to Lago
- `billable_metric_created`: whenever you create a new billable metric
- `plan_created`: whenever you create a new plan
- `customer_created`: whenever a customer is created in Lago
- `subscription_created`: when a subscription is assigned to a customer
- `coupon_created`: whenever a new coupon is created
- `applied_coupon_created`: when a coupon is assigned to a customer
- `add_on_created`: whenever a new add-on is created
- `applied_add_on_created`: when an add-on is assigned to a customer
- `invoice_created`: when a new invoice is emitted for a specific customer
- `payment_status_changed`: when the payment status of an invoice changes


## Examples of payload collected

### billale_metric_created
```js
Analytics.track(
  user_id: 'membership/f37a6b2e-1e79-4710-b0e2-9e451b532461',
  event: 'billable_metric_created',
  properties: {
    aggregation_property: 'amount',
    aggregation_type: 'sum_agg',
    code: 'atm',
    description: '',
    hosting_type: 'self',
    name: 'ATM',
    organization_id: '7c868af7-201c-4ebc-9829-ca902e289e5f',
    version: DateTime.iso8601('2022-07-27T00:00:00.000Z')
  }
)
```
### invoice_created
```js
Analytics.track(
  user_id: 'membership/f37a6b2e-1e79-4710-b0e2-9e451b532461',
  event: 'invoice_created',
  properties: {
    hosting_type: 'cloud',
    invoice_id: '0e31afd2-8e15-49e1-a6fb-11895fa03c97',
    invoice_type: 'subscription',
    organization_id: 'b3e35674-c3d1-4279-8ef1-271271b6cafb',
    version: DateTime.iso8601('2022-07-27T00:00:00.000Z')
  }
)
```

It's useful to mention that Lago will never track the amount of an invoice billed to one of your customers.



