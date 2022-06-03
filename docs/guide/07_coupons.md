---
sidebar_position: 7
---

# Coupons
Coupons allow you to offer discounts to your customers. When you apply a coupon to a customer, its value will be deducted from their next invoice(s).

:::info
The value of the coupon is deducted from the amount of the invoice before tax.
:::

## Create coupons
To create a coupon through the user interface:
1. Access the **"Coupons"** section via the side menu;
2. Click **"Add a coupon"**;
3. Choose a name and a code for your coupon;
4. Define its value and period of validity; and
5. Click **"Add coupon"** to confirm.

## Apply coupons
Here is what you should know about coupons:
1. You can only apply a coupon to a customer if this customer has an active [subscription](../guide/plans/subscription);
2. The currency of the coupon must match the currency of the subscription; and
3. A customer can only benefit from one coupon at a time.

To apply a coupon to a customer:
1. Select a customer from the list;
2. Click **"Actions"** in the upper-right corner and select **"Apply coupon"**;
3. Select a coupon; and
4. Click **"Apply coupon"** to confirm.

You can also apply coupons via the API ([learn more](../api/applied_coupons/apply-coupon)).

### Validity and application periods
The validity period defines how much time you have to apply a coupon to a customer before it expires. If the validity period is **"Forever"**, you can apply the coupon at any time. If the validity period is **"Multiple days"**, you must apply the coupon to a customer before the end of the period, otherwise it will be lost.

Once a coupon has been applied to a customer, its application periods depends on the customer's subscription. A coupon that has been applied to a customer continues to apply after the end of its validity period.

>Example:
>
>On June 16th, you create a $20 coupon that is valid for 10 days.
>
>On June 25th, you decide to apply the coupon to a customer whose subscription is based on a $10 monthly plan that is paid in arrears.
>
>Therefore, the coupon will be applied to both invoices generated at the end of June and at the end of July. Their total amount will be $0.

### Application scope
**Coupons are deducted from the total amount of the following invoice(s)**, including the *subscription* (plan amount) ands the *charge* fees (used for usage-based billing). In case of a coupon's value greater than an invoice, the remaining amount of discount will be applied to the following invoices, until the coupon is totally consumed or removed from a customer.

As mentioned previously, the value of the coupon is deducted from the amount of the invoice before tax.

:::info
**Coupons cannot be applied to Add-ons** or any other one-off fees
:::

## Edit, terminate and delete coupons
In the coupon view, you can click the **ellipsis icon** to see all available actions:
1. **Edit**: allows you to modify the name, code and settings of the coupon;
2. **Terminate**: allows you to deactivate the coupon so that it cannot be applied to any new customer (customers to whom the coupon has already been applied continue to benefit from it); and
3. **Delete**: allows you to delete the coupon and remove it from the list (this action cannot be undone).

:::info
You cannot modify the value and validity period of a coupon, or delete it, if it is currently applied to a customer.
:::

## Remove coupons
To remove a coupon that has been applied to a customer and is still active:
1. Select the customer;
2. Locate the coupon under **"Overview"**;
3. Click the **bin icon** on the right; and
4. Click **"Remove coupon"** to confirm.

The coupon will instantly disappear from the customer view and will not be applied to the next invoice.