---
sidebar_position: 8
---

# Add-ons
Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and elligble for collection straight away.

For instance, Add-ons are really helpful for one time fees, such as "setup fee", "one-time payment" or "customer success fee".

:::info
The value of a coupon is **not** deducted to an add-on. If you want to know more, make sure to read the [Coupons application scope](coupons#application-scope).
:::

## Create Add-ons
To create an Add-on through the user interface:
1. Access the **"Add-ons"** section via the side menu;
2. Click **"Add an Add-on"**;
3. Choose a **name**, a **code** and a description (optional) for your Add-on;
4. Define its value and currency; and
5. Click **"Add add-on"** to confirm.

## Assign an add-on to a customer
Here is what you should know about Add-on:
1. You can only apply an add-on to a customer if this customer has an active [subscription](../guide/plans/subscription);
2. The currency of the add-on must match the currency of the subscription; and
3. You can apply ad-libitum an add-on to a customer.

To apply an ad-on to a customer:
1. Select a customer from the list;
2. Click **"Actions"** in the upper-right corner and select **"Apply add-on"**;
3. Select an add-on from the list; and
4. Click **"Apply add-on"** to confirm.

Obviously, you can also apply add-ons via the API ([learn more](../api/applied_add_ons/apply-add-on)).

### Application scope
You can apply the same add-on to a customer **as much as you want**. Add-ons are one-off fees that are invoiced immediately.

By assigning an add-on to a customer, you can **change the amount and the currency** for an add-on applied to a customer.
:::tip
This enables you to apply the same add-on for several customers having a different currency, or if you want to apply a different amount for one of these customers. By using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined by the UI.
:::


## Edit, delete add-ons
In the Add-ons section, you can click the **ellipsis icon** to see all available actions:
1. **Edit**: allows you to modify the name, code, description and settings of the add-on;
2. **Delete**: allows you to delete the add-on and remove it from the list (this action cannot be undone).

:::info
You **cannot** edit or delete an add-on if it has been applied to a customer.
:::

## Invoicing the add-ons
As told previously, an **add-on is invoiced straigh away**. You are able to find an assigned add-on through a webhook with `webhook_type = invoice.add_on_added` 

By assiging an add-on to a customer, an invoice is generated immediately.
It's important to say that:
1. Add-ons are ellible to the taxes defined for a customer;
2. Coupons cannot be used to discount the add-on amount.

