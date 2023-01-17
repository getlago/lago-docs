---
sidebar_position: 14
---

# Integration testing
This step-by-step integration guide will help you get started with Lago.

## Foreword
At the moment, each Lago account is associated with a unique environment. It is currently not possible to have your test environment and production environment in the same account.

However, we can suggest different workarounds:
1. **Create two accounts** to get access to two environments, one that could be called "Company Staging" and another one that could be called "Company Production"; or

2. **Leverage our two hosting solutions** to use Lago Cloud as a test environment and Lago Open Source as a production environment (or vice versa).

Please note that the above workarounds will require you to replicate the same setup in both environments.

:::info
In the future, you will be able to get access to a test environment and a production environment with the same Lago account.
:::

## 1. Define a billable metric
To define a billable metric through the user interface:
1. In the side menu, select **"Billable metrics"**;
2. Click **"Add a billable metric"** in the upper right corner;
3. Fill in the form ([learn more about billable metrics](./billable-metrics/overview)); and
4. Click **"Add billable metric"** to save.

## 2. Create a plan (with charges)
To create a plan through the user interface:
1. In the side menu, select **"Plans"**;
2. Click **"Add a plan"** in the upper right corner;
3. Fill in the form ([learn more about plans](./plans/overview)); and
4. Click **"Add plan"** to save.

## 3. Create a customer
To create a customer through the user interface:
1. In the side menu, select **"Customers"**;
2. Click **"Add a customer"** in the upper right corner;
3. Fill in the form in the pop-up window ([learn more about customers](./customers)); and
4. Click **"Add customer"** to save.

You can also create customers through the API, as described in the [documentation](../api/customers/create-update-customer).

## 4. Start a subscription
To start a subscription, you need to assign a plan to an existing customer. To do so through the user interface:
1. In the side menu, select **"Customers"**;
2. Select a customer from the list;
3. On the right-hand side, click **"Add a plan"**;
4. Select the plan you would like to assign to your customer; and
5. Click **"Add plan"** to confirm.

A success toast will be displayed and the new subscription will appear in the customer view.

You can also start a subscription through the API, as described in the [documentation](../api/subscriptions/create-subscription).

## 5. Send usage-based events
Events sent from your backend to Lago will be automatically aggregated according to the predefined billable metrics. To start sending usage-based events, please refer to the [API documentation](../api/events/metered-event).

## 6. Invoice your customers
At the end of the billing period, Lago will automatically generate an invoice for each customer. Invoices will be sent to your application using webhooks. To define the URL to which the webhooks will be sent:
1. In the side menu of the user interface, select **"Developers"**;
2. On the right-hand side, click **"Add a webhook"**;
3. Enter the URL of your application; and
4. Click **"Add webhook"** to confirm.

To learn more about webhooks and invoices, please refer to the [API documentation](../api/invoices/invoice-object).
