---
sidebar_position: 6
---

# Customers

## Create and update a customer
To create a customer through the user interface:
1. Access the **"Customers"** section via the side menu;
2. In the upper right corner, click **"Add a customer"**;
3. Enter the customer's name and external ID (i.e. unique ID as defined in your backend system);
4. Select the customer's timezone (optional - [learn more](#invoicing-a-customer));
5. Enter the customer's billing information, including company information and address (optional);
6. Select the default payment provider for this customer (optional - [learn more](./payments/overview)); and
7. Click **"Create customer"** to confirm.

Once a customer is created, you can access the customer view, where you can edit their information.

:::caution
You cannot change the `external_id` of a customer after an object has been assigned to them (i.e. plan, coupon, add-on, wallet and credits).
:::

You can also [create and update customers](../api/customers/create-update-customer) via the API.

## Assign objects to a customer
The usage monitoring and billing processes start when you assign a plan to a customer, which triggers a [subscription](./plans/subscription).

You can also apply [coupons](coupons), [add-ons](./addons) and [prepaid credits](./prepaid_credits) to a customer account.

To assign objects to a customer through the user interface:
1. Access the **"Customers"** section via the side menu;
2. Select a customer from the list;
3. In the upper right corner of the customer view, click **"Actions"**; and
4. Select an action from the dropdown list.

## Monitor the customer's current usage
When a plan that includes usage-based charges is assigned to a customer, you can start pushing [events](./events/ingesting_events) associated with the customer account.

During the billing period, the customer's current usage is visible in the **"Usage"** tab of the customer view, including (but not limited to):
- Total amount for the period under consideration; and
- Breakdown by charge, including total number of billing units and amount.

![View of the "Usage" tab](../../static/img/customer-current-usage.png)

You can retrieve the customer's current usage via the API using [this endpoint](../api/customer_usage/customer-usage).

## Invoicing a customer
If a customer has an active subscription, Lago will automatically generate an [invoice](./invoicing/overview) for them at the end of the billing period.

### Timezone
The beginning and end of the billing period depend on the timezone applied to the customer account. The default timezone is UTC but you can define another [timezone for your organization](../../changelog/timezones), which can be overwritten by the customer's timezone.

:::note Premium feature ✨
The timezone feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

To set the customer's timezone through the user interface:
1. Access the **"Customers"** section via the side menu;
2. Select a customer from the list;
3. In the **"Overview"** tab of the customer view, click **"Edit"** above the customer details;
4. Select a timezone from the list; and
5. Click **"Edit customer information"** to confirm.

The dates displayed in the **"Usage"**, **"Invoices"** and **"Credit notes"** tabs of the customer view are based on the customer's timezone.

:::tip
You can hover over any date in the customer view to see the reference timezones.
:::

### Preferred language
The default language for documents is defined at the organization level ([learn more](./invoicing/download-invoices#translate-invoices)). It can be overwritten at the customer level.

To set the customer's preferred language:
1. Access the **"Customers"** section via the side menu;
2. Select a customer from the list;
3. Open the **"Settings"** tab;
4. Click **"Add a language"**;
5. Select a language from the list; and
6. Click **"Add language"** to confirm.

Please refer to the API documentation to see the [list of supported languages](../api/resources/locales).

:::info
When the customer's preferred language is updated, the change only applies to new PDF files. Existing documents are not affected.
:::

## Deleting a customer
You may delete a customer linked to existing objects (i.e. applied coupons, wallets, subscriptions, add-ons).

If you do so:
- All [subscriptions](./plans/subscription) associated with this customer account will be immediately terminated (this action may trigger the generation of invoices and/or credit notes);
- All [coupons](coupons) applied to this customer account will be immeditely terminated;
- The customer's active [wallet](prepaid_credits) will be immediately terminated and all remaining credits will be voided; and
- All `draft` invoices associated with this customer account will be immediately finalized.

`finalized` invoices and [credit notes](credit_notes) associated with the deleted customer remain available in the **"Invoices"** section of the user interface and can also be retrieved via the API.

It is possible to generate new credit notes and process refunds after the deletion of the customer.

:::info
After deleting a customer account, you can create a new one using the same `external_id`.
:::