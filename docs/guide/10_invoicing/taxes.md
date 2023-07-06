---
sidebar_position: 3
---

# Taxes
An organization may need to collect various taxes, represented by different tax objects. These taxes can be applied at both the organization level and the customer level.

## Create taxes
To add a new tax through the user interface:
1. Access the tax settings page through the **Settings** section > **Taxes** tab;
2. In the upper right corner of the list, click **"Add"** to create a new tax;
3. Enter its `name`;
4. Assign it a unique `code` (i.e. unique ID as defined in your backend system);
5. Add a `description` *(optional)*; and
6. Define the `rate` that applies.

## Editing and deleting taxes
A tax can be deleted or edited even if it is linked to an organization or a customer. However, it's important to note that any change made to a tax object, including its removal, has an impact on all existing draft invoices or upcoming invoices associated with this tax.

Available actions include:
- **Edit**: allows you to modify the name, code and rate of the tax object; and
- **Delete**: allows you to delete the tax object and remove it from the list (this action cannot be undone).

## Apply taxes to objects
When generating invoices, you may need to apply taxes. The tax rate applies to all fees (i.e. subscription fees and charges) and appears on the invoices.

### Taxes at the organization level
To apply tax objects to the organization through the user interface:
1. Access the invoice settings page through the **Settings** section > **Invoice** tab;
2. In the **Taxes on organization** section, click **"Add"** to add a new tax;
3. Select the tax object you want to apply; and
4. Repeat the action if you want to add another tax.

### Taxes at the customer level
To apply tax objects to a specific customer through the user interface:
1. Access the customer settings page through the **Customer** details page > **Settings** tab;
2. In the **Tax rates** section, click **"Add a tax"** to add a new tax;
3. Select the tax object you want to apply; and
4. Repeat the action if you want to add another tax.

### Tax hierarchy
When taxes are defined at the organization level, customers who do not have specific tax settings inherit the default taxes, which means that the organization's tax settings are automatically applied to these customers.

When an invoice is generated, the tax hierarchy is as follows:
1. Lago applies the tax objects defined at the customer level;
2. If there are no taxes at the customer level, Lago applies the tax objects defined at the organization level; and
3. If there are no taxes at the organization level, Lago applies a 0% tax rate (visible on the invoice).

![Tax hierarchy](../../../static/img/tax-hierarchy.png)
