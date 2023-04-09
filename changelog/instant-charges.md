---
date: 2023-04-07T11:00
---

# Instant charges ✨
:::note Premium feature
This feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

If you want to collect payments for usage-based charges on the fly, without waiting for the end-of-period invoice, you can turn on the new instant charge feature.

When a charge is marked as instant, Lago will automatically calculate the fee associated with each event as soon as it is ingested. This information will then be sent to you in a `fee.instant_created` webhook message.

You can also get an estimate for an instant charge before the actual event is confirmed through the `/api/v1/events/estimate_fees` endpoint.

[Learn more](../docs/guide/plans/instant-charges)