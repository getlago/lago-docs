---
sidebar_position: 5
---

# Upgrades & Downgrades
To modify an active subscription through the user interface:
1. Go to the **"Customers"** section;
2. Select a customer from the list;
3. Click **"Upgrade/downgrade plan"**;
4. Select the new plan you want to assign to the customer (you can also [overwrite an existing plan](subscription#overwriting-a-plan)); and
5. Click **"Change plan"** to save.

You can also terminate a subscription and create a new one via the API ([learn more](../../api/subscriptions/terminate-subscription)).

## Overview
When modifying a subscription, Lago will assess whether the change is an upgrade or a downgrade. The result is determined by the monthly value of the plans (i.e. the base amount as defined in each plan model, calculated on a monthly basis, and excluding charges).

Here are some examples:

| Initial plan model | New plan model | Result    | Comments              |
| ------------------ | -------------- | --------- | --------------------- |
| $20 per month      | $40 per month  | Upgrade   | $40 > $20             |
| $20 per month      | $15 per month  | Downgrade | $15 < $20             |
| $20 per month      | $300 per year  | Upgrade   | $300 / 12 = $25 > $20 |
| $20 per month      | $180 per year  | Downgrade | $180 / 12 = $15 < $20 |

In the case of an upgrade, the initial subscription will terminate immediately and the new subscription will start right away. However, in the case of a downgrade, the initial subscription will terminate at the end of the current billing period.

:::caution
If you upgrade the subscription during the trial period of the initial plan, the customer will lose the remaining days of their trial. To avoid this, you should ensure the new plan also includes a trial period.
:::

## Impact on invoicing
When a subscription terminates, either as part of an upgrade or a downgrade, Lago automatically generates a final invoice including **outstanding charges and/or subscription fees** (for plans to be paid in arrears). It may also generate an invoice for the new subscription if the new plan has to be paid in advance.

Subscription fees are calculated on a pro rata basis according to the number of days.

Consider the following example:

>Your customer is on the standard plan (e.g. $20 to be paid in advance each month). Therefore, beginning of May, an invoice of $20 was generated for them.
>
>The customer now wants to switch to the premium plan (e.g. $40 to be paid in advance each month). If you modify their subscription on May 11th, Lago will generate a new invoice of $7.10.
>
>There are 21 days left until the end of the month (including May 11th), so the calculation is:
>
>21 days x $40 / 31 days = $27.10 - $20 already invoiced = $7.10
