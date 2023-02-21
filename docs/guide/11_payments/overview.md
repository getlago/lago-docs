---
sidebar_position: 1
---

# Overview
Lago helps you monitor usage and calculates how much each customer owes you.

However, **Lago is not a payment service provider (PSP)**.

## Payment collection process
To collect payments from your customers, you can:
- Use our native integrations with [GoCardless](gocardless-integration) and [Stripe Payments](stripe-integration); or
- Use the [webhooks](../../api/webhooks/messages) sent by Lago to transmit billing information to your PSP (e.g. Paddle, Adyen, internal ledger, etc.).

Lago is **agnostic**, which means that you can use our billing solution with any PSP.

## Payment status
When payments are processed through one of our native integrations, the payment status of the invoice is **automatically updated**.

If needed, you can update the payment status via the user interface:
1. Access the **"Invoices"** section;
2. Select an invoice from the list;
3. Open the **"Actions"** dropdown menu in the upper right corner;
4. Click **"Update payment status"**;
5. Select the new payment status; and
6. Click **"Update status"** to confirm.

This action can be performed [via the API](../../api/invoices/update-payment-status) as well.