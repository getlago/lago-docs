---
sidebar_position: 1
---

# Overview
In addition to the plan price, you have the flexibility to charge your customers based on their usage. This allows you to create charges that align with specific metrics, such as the number of *API calls*, *active users*, *transactions*, *compute time*, and more. These additional charges are directly tied to the billable metrics defined earlier.

## Adding usage-based charges to a plan
To incorporate usage-based charges into a plan, you can utilize existing billable metrics. This enables you to offer "pay-as-you-go" features.

## Key information about usage-based charges
Here are some important details to consider regarding usage-based charges:

### Invoice timing

**Invoicing charges in arrears:** Charges can be settled in arrears, which means they are invoiced at the end of the billing period based on the actual usage. This payment option is particularly beneficial for usage types like *storage*, *API calls*, or *compute*, where it is more practical to wait until the end of the period before billing.

**Invoicing charges in advance**: Alternatively, charges can be paid in advance, providing customers with immediate invoicing. This invoice option is suitable for usage types such as user *seats* or *integrations* that require instant billing upon any changes made.

### Currency of charges
All charges are denominated in the same currency as the plan to ensure consistency and transparency.

### Trial period exclusions
It's important to note that the trial period exclusively applies to the base amount of the plan and does not extend to usage-based charges.


## Number of decimals
Lago allows you create charges with up to fifteen decimals (e.g. $0.000123456789123).

Please note that charges are invoiced in `amount_cents`. Therefore, Lago automatically [rounds prices](../../invoicing/fees#rounding-rules-for-lago-fees) (e.g. USD 1102 `amount_cents` = $11.02).

## Deleting a charge
You may delete a charge included in a plan associated with existing [subscriptions](../../lans/subscription).

If you do so and save the change:
- The charge will be immediately removed from all subscriptions linked to this plan;
- The charge will no longer be included in the [current usage](../../../api/customer_usage/customer-usage) of the customers concerned; and
- The charge will be immediately removed from all `draft` invoices associated with these subscriptions.

However, the charge will still be included in all `finalized` invoices associated with these subscriptions.

:::info
Deleting a charge does not delete the events associated with the corresponding billable metric. If later you decide to add the charge back into the plan, the events received before the deletion may be taken into account in the billing process (depending on the limits of the billing period).
:::

![How to delete a charge](../../../../static/img/charges-delete.png)