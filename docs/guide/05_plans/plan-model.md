---
sidebar_position: 2
---

# Plan Model
The plan model is crucial to define **how and how much a Customer is charged** by choosing a Plan. It is also defining the **frequency of invoicing** to your customers.

## The Plan interval
The `interval` defines when the Plan is charged and when the invoicing is triggered. Also, other [Charges (price per-usage for your Billable metrics)](./charges) follow the Plan interval to be resumed to 0 and invoiced to a customer.

**You have 2 options to define the Plan `interval`:**
1. **Monthly**: Plans and Charges are billed every month
2. **Yearly**: Plans and Charges are billed every year

## The base charge amount and its currency
You need to define a **base amount** for each Plan. This amount is what the Customer will pay by subscribing to the Plan regardless the usage-based consumption.

This base charge `amount` is recurring, and billed at the end of each billing [interval](#the-plan-interval).

## Pay in advance or in arrears
With Lago, you can define if the base charge of the Plan is paid **in advance** or **in arrears**. 

- If the toggle is `off` (boolean set to FALSE), the Plan is paid for the past period (in arrears).
- If the toggle is `on` (boolean set to TRUE), the Plan is paid upfront (in advance) for the period.

:::info
Note that this toggle only affects the base amount of the Plan. Additional charges for per-usage Billable metrics **are always paid in arrears because they are linked to a past consumption of your customers.**
:::

## The trial period (optional)
You can decide to apply a `Trial period` for a Plan. This means your customers can test the Plan without being charged for a certain number of days. This is optional and if the value is null, the Plan holds 0 day of trial.

Note  that the trial period **can only be specified in days**. A pro-rata is applied to the Plan regarding the number of days offered.

:::caution
A trial period can only be applied to the first subscribed Plan. In case of an upgrade or downgrade, the trial period of the new Plan **is not applied**.
:::

## Pro-ratas based on subscription date
Obviously, we know that your customers don't necessarily sign up for a Plan at the very begining of each month (or each year). This is why Lago automatically applies a pro-rata for the first and the last subscription period of a Plan.

**Here is an example**
A `Customer X` signs up for the Plan `Start` (base amount of 10€, with no trial period) on April 15, 2022. 
- If the Plan is defined to be `paid in arrears`, this Customer will be charged 5€ for the first month at the end of the period (May 1, 2022).
- If the Plan is defined to be `paid in advance`, this Customer is charged 5€ straight away for the first month (April 15, 2022).

:::info
Note that pro-ratas can also be applied in case of **upgrades or downgrades**.
:::
