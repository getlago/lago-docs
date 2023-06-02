---
sidebar_position: 3
---

# Spending minimum

:::note Premium feature ✨
The minimum spend feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

Usage-based charges are always paid at the end of the billing period, based on the amount of consumption that occurred. However, you could possibly need to define a spending minimum that a customer needs to commit to.

If your customer spends less than the committed amount, you will **charge a true-up fee equal to the difference between the commitment and the actual usage**. Please note that this true-up fee is tied to the initial charge but will appear as a separate line item in an invoice or in a credit note.

**Spending minimums and true-up fees are always prorated** based on the number of days used in the subscription. This ensures fairness if your customer signs up at the end of the month, upgrades to a new plan, or terminates an ongoing subscription before the end of the period.

To define a charge spending minimum: 

1. Go to a Plan;
2. Add a usage-based charge;
3. Define a price model;
4. Click the **add a spending minimum** button; and
5. Define a spending minimum amount.

You can also define minimum spending requirements [via API](../../../api/plans/create-plan) (see `min_amount_cents` attribute).

In the example below, a customer is billed based on Monthly Tracked Users (MTU), with a standard pricing of $0.010 per tracked users. However, the customer is committed to a spending minimum of $100. If the total consumption of MTUs for the period is $50, a true-up fee of $50 will be charged.