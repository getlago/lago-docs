---
date: 2023-06-01T11:00
---

# Charges paid in advance

If you want to collect payments for usage-based charges on the fly, without waiting for the end-of-period invoice, you can turn on the new `pay_in_advance` feature.

When a charge is [marked as paid in advance](../docs/guide/plans/charges/cadence#charges-paid-in-advance), Lago will automatically calculate the fee associated with each event as soon as it is ingested. This information will then be sent to you in a `fee.created` webhook message.

You can also get an estimate for a charge to be paid in advance before the actual event is confirmed through the `/api/v1/events/estimate_fees` endpoint.

In addition to this, users with a premium license can define whether or not `pay_in_advance` charges are [invoiceable](../docs/guide/plans/charges/invoiceable).