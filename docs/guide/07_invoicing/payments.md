---
sidebar_position: 3
---

# Payments
**Lago is not a payment provider.** This means Lago calculates how much a customer owes you at the end of each billing period, sends a webhook with all the items to be paid alongside the invoice, but we do not trigger the payment.

To do it, you may have to use this webhook with a payment system (Stripe, Paddle, internal ledger...).

As Lago is open source by design, you have access to the billing database, all the webhooks and all the invoices for your customers. With this information stored on your side, you can connect it with any payment providers.