---
sidebar_position: 2
---

# Plan model
The plan model defines **when** and **how much** a customer is charged.

## Plan interval
The plan interval corresponds to the billing period and defines when invoices are generated. In most cases, the [charges](../plans/charges/overview) are also calculated according to the plan interval.

There are several plan intervals:
1. **Weekly**: subscription fees and charges are billed on a weekly basis (Monday to Sunday);
2. **Monthly**: subscription fees and charges are billed on a monthly basis; and
3. **Yearly**: subscription fees are billed on a yearly basis and charges can be billed monthly or annually.

## The base charge amount and its currency
You need to define a **base amount** for each plan (i.e. the subscription fee). This amount is what the customer will pay by subscribing to the plan regardless of their consumption.

This base charge `amount` is recurring, and billed at the end of each billing interval.

## Pay in advance or in arrears
With Lago, you can define if the base charge of the Plan is paid **in advance** or **in arrears**. 

- If the toggle is `off` (boolean set to FALSE), the Plan is paid for the past period (in arrears).
- If the toggle is `on` (boolean set to TRUE), the Plan is paid upfront (in advance) for the period.

:::info
Note that this toggle only affects the base amount of the Plan. Additional charges for per-usage Billable metrics **are always paid in arrears because they are linked to a past consumption of your customers.**
:::

## Trial period (optional)
You may define a trial period for your plan. A trial period is defined as a number days that are not charged to the customer.

Consider the following example:

>You create a monthly plan of $50 that needs to be paid in advance, with a trial period of 5 days.
>
>If the customer's subscription starts on April 1st, then Lago will immediately issue an invoice for the period April 6th to April 30th.
>
>Therefore, on April 1st, the system will issue an invoice of $50 x 25 days due / 30 days in April = $41.67.

The trial period applies to the base amount of the plan. Usage-based charges incurred during the trial period remain payable by the customer.

:::info
The trial period **only applies to the first plan** associated with the subscription. In case of an upgrade or a downgrade, the trial period of the new plan does not apply.
:::

## Pro-ratas based on subscription date
Obviously, we know that your customers don't necessarily sign up for a Plan at the very begining of each month (or each year). This is why Lago automatically applies a pro-rata for the first and the last subscription period of a Plan.

Here is an example:
A `Customer X` signs up for the Plan `Start` (base amount of 10€, with no trial period) on April 15, 2022. 
- If the Plan is defined to be `paid in arrears`, this Customer will be charged 5€ for the first month at the end of the period (May 1, 2022).
- If the Plan is defined to be `paid in advance`, this Customer is charged 5€ straight away for the first month (April 15, 2022).

:::info
Note that pro-ratas can also be applied in case of **upgrades or downgrades**.
:::