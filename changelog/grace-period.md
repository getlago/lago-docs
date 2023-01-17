---
date: 2023-01-12T11:00
---

# Grace period ✨
:::note Premium feature
This feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

If at the end of the billing period, you want to review the invoices before sending them to customers for payment, you can define a [grace period](../docs/guide/invoicing/grace-period).

During the grace period, invoices are in `draft` status and can be modified. Available actions include:
- **Adding usage records** by sending events with a `timestamp` within the relevant billing period;
- **Applying coupons** to the customer's account; and
- **Adding credits** to the customer's wallet and credit note wallet.

When the grace period expires, invoices are automatically `finalized` (they can no longer be edited), which triggers the `invoice.created` [webhook](../docs/api/webhooks/messages). You can also finalize invoices manually.

The organization's grace period applies to all customers by default, but it can be overwritten by the customer's grace period.