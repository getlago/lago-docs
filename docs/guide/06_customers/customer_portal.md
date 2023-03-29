---
sidebar_position: 4
---

# Customer portal
:::note Premium feature ✨
This feature is only available to users with a premium license. Please **[contact us](mailto:hello@getlago.com)** to get access to Lago Cloud and Lago Self-Hosted Premium.
:::

The Lago Customer Portal is a user-friendly platform that allows you to effortlessly share billing information, such as past invoices, with your end customers. As we continue to develop this tool, you will be able to display even more useful information to your customers.

## Generate a customer portal link
To generate a customer portal URL that can be embedded into your product, you have two options:
1. Use the [API endpoint](../../api/customers/customer-portal-url); or
2. Click the Customer Portal link on a specific customer details view.

![Customer Portal Access](../../../static/img/customer-portal-detail-view.png)

## Customer portal preferred language
By default, the embedded portal is displayed in English. However, you can easily change the language for a specific customer by adjusting the `document language` in their settings. To access this feature, follow these simple steps:

To access document language settings:
1. Go to the specific customer's profile;
2. Click the **Settings** tab;
3. **Edit** the document language section; and
4. Select the preferred language.

You can also update the language of a customer directly from the API.

:::info
If the language you are looking for is not yet available, please [visit this page](../../api/resources/locales).
:::

## Invoice history dashboard
The Customer Portal allows your customers to retrieve all past invoices and download them with ease. Lago displays useful billing information such as the issuing date, invoice number, amount, and payment status (paid or unpaid). Additionally, your customers can filter the list and search for a specific invoice.

![Invoices list - Customer Portal](../../../static/img/customer-portal-invoices-list.png)


## Embedding the dashboard
You can also use the API to generate an embeddable Customer Portal that can be displayed in your application by using an iframe. To do so, use the endpoint `/customers/:external_customer_id/portal_url` to generate an embeddable URL that can be displayed in your user interface.

:::info
For security reasons, the token returned by the API **expires after 12 hours**. Therefore, it is important to use the endpoint and generate a new token every time a customer refreshes or accesses the billing page.
:::