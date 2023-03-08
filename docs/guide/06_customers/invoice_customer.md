---
sidebar_position: 3
---

# Invoice a customer
If a customer has an active subscription, Lago will automatically generate an [invoice](../invoicing/overview) for them at the end of the billing period.

## Timezone
The beginning and end of the billing period depend on the timezone applied to the customer account. The default timezone is UTC but you can define another [timezone for your organization](../../../changelog/timezones), which can be overwritten by the customer's timezone.

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

## Preferred language
The default language for documents is defined at the organization level [learn more](../invoicing/download-invoices#translate-invoices). It can be overwritten at the customer level.

To set the customer's preferred language:
1. Access the **"Customers"** section via the side menu;
2. Select a customer from the list;
3. Open the **"Settings"** tab;
4. Click **"Add a language"**;
5. Select a language from the list; and
6. Click **"Add language"** to confirm.

Please refer to the API documentation to see the [list of supported languages](../../api/resources/locales).

:::info
When the customer's preferred language is updated, the change only applies to new PDF files. Existing documents are not affected.
:::