---
sidebar_position: 4
---

# Instant charges
:::note Premium feature ✨
Only users with a premium license can have instant charge fees via the user interface or the API. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

Instant charges refer to fees that are due as soon as the corresponding events occur, as opposed to standard charges that are due at the end of the billing period. For example, fintech companies may collect fees immediately for events associated with specific billable metrics, such as ATM withdrawals or bank transfers.

## Mark a charge as instant
When configuring plans and their associated charges, you can mark charges as "instant" to enable immediate billing. By default, the "instant charge" option is turned off. To enable instant charging:

1. Create a billable metric;
2. Create a plan that includes a charge associated with the billable metric; and
3. Activate the "instant charge" option for this specific charge.

A plan may include both instant and standard charges. Please note that the instant charge option may not be effective for some billable metric aggregation types or charge models.

Billable metric aggregation types not supported:
- `max_agg`; and
- `recurring_count_agg`.

Charge models not supported:
- `volume` charge model.

## Ingest events related to instant charges

Fees related to instant charges will not trigger any payment intent through integration with a payment processor (e.g. Stripe or GoCardless) when received or at the end of the billing period. Users are responsible for collecting payments for these charges. To facilitate this process, each time a user pushes an event through `POST api/v1/events`, Lago will:

1. Calculate the corresponding fee; and
2. Send a `fee.instant_created` webhook message to the user, including the calculated fee.

Coupons, prepaid credits and credit note credits are not taken into account in the calculation of the fees related to instant charges.

:::caution
Lago does NOT generate invoices for fees related to instant charges that have been paid or are yet to be paid.
:::

## Estimated fee

Estimate the price of an instant charge fee before sending an event. Send a payload similar to an event to `/api/v1/events/estimate_fees` to retrieve an estimate of the cost of the event for the customer.

Coupons, prepaid credits and credit note credits are not taken into account in the calculation of the estimated fees related to instant charges.

:::caution
Since Lago does not control the stream of ingested events, this endpoint returns an estimate which may be different from the final fee, especially if an event was received between the estimate request and event ingestion.
:::