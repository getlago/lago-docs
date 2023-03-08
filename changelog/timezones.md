---
date: 2023-01-10T10:00
---

# Timezones ✨
:::note Premium feature
This feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

You can now set the timezone of your organization in the settings of the app. To do so:
1. Access the **"Settings"** section via the side menu;
2. In the **"Organization"** tab, you will see the current timezone (UTC by default);
3. Click **"Edit"**;
4. Select a new timezone from the list; and
5. Click **"Save timezone"** to confirm.

It can also be set through the API using this [endpoint](../docs/api/organizations/update-organization).

The organization's timezone applies to all customers by default and determines when billing periods start and end (i.e. when invoices should be generated). It is also the reference timezone for most views and lists in the app.

The organization's timezone can be overwritten by the customer's timezone ([learn more](../docs/guide/06_customers/invoice_customer.md)).

:::tip
In the app, you can hover over any date with a dotted underline to see the reference timezones.
:::