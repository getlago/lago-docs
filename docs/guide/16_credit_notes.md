---
sidebar_position: 16
---

# Credit Notes
You can issue a credit note to refund or re-credit a customer's account. Credit notes can be issued for invoices related to subscriptions and add-ons, but not for invoices related to credit purchases.

:::info
Each credit note must be linked to an existing invoice whose status is `finalized` and whose amount is **greater than zero**.
:::

## Create credit notes
To create a credit note through the user interface:
1. Go to the **"Customers"** section;
2. Select a customer to open the customer view;
3. Open the **"Invoices"** tab;
4. Click an invoice to see its details; and
5. Select **"Issue a credit note"** from the **"Actions"** dropdown (upper right corner).

The credit note creation process varies depending on the payment status of the corresponding invoice:
- If the payment status of the invoice is `pending` or `failed`, the credit note will allow you to re-credit the customer's account; and
- If the payment status of the invoice is `succeeded`, the credit note will allow you to re-credit the customer's account and/or refund them.

To issue a credit note:
1. Select a reason from the list;
2. Add an internal note (optional);
3. Select the item(s) and enter the amount(s) you want to credit;
4. Select the credit method(s) (only available for paid invoices - [learn more](#credit-methods)); and
5. Click **"Issue credit note"** to confirm.

:::info
For each item, you must enter a credit amount equal to or less than the initial amount of the item, excluding tax. The total amount of the credit note cannot exceed the total amount of the invoice.
:::

When the credit note is created, it will appear below the original invoice on the invoice details page.

You can link several credit notes to an invoice.

## Credit methods
