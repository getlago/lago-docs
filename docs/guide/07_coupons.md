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
4. Select the type of coupon (i.e. fixed amount or percentage);
5. Define its value and frequency (i.e. is applied once or several times);
6. Choose whether or not to set an expiration date (i.e. date after which the coupon can no longer be redeemed); and
7. Click **"Add coupon"** to confirm.

## Apply coupons
Here is what you should know about coupons:
- If the currency of the customer is already defined, the currency of the coupon must be the same; and
- A customer can only benefit from one coupon at a time.

To apply a coupon to a customer:
1. Select a customer from the list;
2. Click **"Actions"** in the upper-right corner and select **"Apply coupon"**;
3. Select a coupon; and
4. Click **"Apply coupon"** to confirm.

You can also apply coupons via the API ([learn more](../api/coupons/apply-coupon)).

:::info
A coupon applied to a customer continues to apply beyond the expiration date.
:::

## Application scope
**Coupons are deducted from the total amount of the following invoice(s)**, including subscription fees and charges. In case of a coupon's value greater than an invoice, the remaining amount of discount will be applied to the following invoices, until the coupon is totally consumed or removed from a customer.

As mentioned previously, the value of the coupon is deducted from the amount of the invoice before tax.

:::info
Coupons do not apply to add-ons or any other one-off charges.
:::

## Edit, terminate and delete coupons
In the coupon view, you can click the **ellipsis icon** to see all available actions:
1. **Edit**: allows you to modify the name, code and settings of the coupon;
2. **Terminate**: allows you to deactivate the coupon so that it cannot be applied to any new customer (customers to whom the coupon has already been applied continue to benefit from it); and
3. **Delete**: allows you to delete the coupon and remove it from the list (this action cannot be undone).

:::info
You cannot modify the code, value and frequency of a coupon, or delete it, if it has already been applied to a customer.
:::

## Remove coupons
To remove a coupon that has been applied to a customer and is still active:
1. Select the customer;
2. Locate the coupon under **"Overview"**;
3. Click the **bin icon** on the right; and
4. Click **"Remove coupon"** to confirm.

The coupon will instantly disappear from the customer view and will not be applied to the next invoice.