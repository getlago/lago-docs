---
sidebar_position: 8
---

# Add-ons
Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and eligible for collection straight away.

For instance, add-ons can be used to apply one-time fees, such as a setup fee, one-time payment or customer success fee.

:::info
The value of a coupon is **not** deducted from an add-on. For more information, please review the [coupons application scope](coupons#application-scope).
:::

## Create add-ons
To create an add-on through the user interface:
1. Access the **"Add-ons"** section via the side menu;
2. Click **"Add an add-on"**;
3. Choose a **name**, a **code** and a description (optional) for your add-on;
4. Define its value and currency; and
5. Click **"Add add-on"** to confirm.

## Assign an add-on to a customer
Here is what you should know about add-ons:
1. You can only apply an add-on to a customer if this customer has an active [subscription](../guide/plans/subscription);
2. The currency of the add-on must match the currency of the subscription; and
3. You can apply an add-on to a customer ad libitum.

To apply an add-on to a customer:
1. Select a customer from the list;
2. Click **"Actions"** in the upper-right corner and select **"Apply add-on"**;
3. Select an add-on from the list; and
4. Click **"Apply add-on"** to confirm.

Obviously, you can also apply add-ons via the API ([learn more](../api/add_ons/apply-add-on)).

### Application scope
You can apply the same add-on to a customer **as many times as you want**. Add-ons are one-off fees that are invoiced immediately.

When assigning an add-on to a customer, you can **change the amount and currency**.

:::tip
This allows you to apply the same add-on to several customers whose subscriptions don't have the same currency, or to apply a different amount for one of these customers.

When using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined in the UI.
:::


## Edit and delete add-ons
In the add-ons section, you can click the **ellipsis icon** to see all available actions:
1. **Edit**: allows you to modify the name, code, description and settings of the add-on;
2. **Delete**: allows you to delete the add-on and remove it from the list (this action cannot be undone).

:::info
You **cannot** edit or delete an add-on if it has been applied to a customer.
:::

## Invoicing
As mentioned previously, an **add-on is invoiced straigh away**. You are able to find an assigned add-on through webhook with `webhook_type = invoice.add_on_added`.

When assiging an add-on to a customer, an invoice is generated immediately. Please note that:
1. Add-ons are subject to taxes, as defined in the customer view;
2. Coupons cannot be deducted from the amount of the add-on.