---
date: 2022-12-06T17:00
---

# Invoice payment status
As we are making progress on the [grace period feature](https://github.com/getlago/lago/issues/99), which will allow you to review invoices before they are sent to customers, we will soon introduce changes to the API to add new invoice management options.

The [invoice object](../docs/api/invoices/invoice-object) currently includes a `status` attribute with three possible values: `pending`, `failed` and `succeeded`. This attribute will be renamed `payment_status` for accuracy purposes (possible values will remain unchanged).

In addition to this, a new `status` attribute will be created, including two possible values:
- `draft`: when an invoice has been generated but can still be modified; and
- `finalized`: when the invoice is validated and can no longer be modified.

All existing invoices will be `finalized`, you will not be able to use the `draft` status until the grace period feature is deployed (later this month).

These changes will take effect on **Thursday, December 8th 2022**.

Please contact us at [hello@getlago.com](mailto:hello@getlago.com) if you have any questions, we will be happy to help.