---
sidebar_position: 1
---

# Overview
Lago automatically generates invoices for each customer according to the plan model. When a new invoice is generated, Lago also sends an `invoice.created` webhook ([learn more](../../api/webhooks/messages)).

When an invoice is linked to an add-on, another type of webhook is sent, called `invoice.add_on_added`.

## Invoice object
Invoices include (but are not limited to):
- Invoice number;
- Billing period;
- Customer information;
- Fees; and
- Taxes.

You can [download invoices](download-invoices) or use the [invoice object](../../api/invoices/invoice-object) to create your own invoice template.

:::tip
You can also use the invoice object to transmit information to your accounting software or payment service provider.
:::