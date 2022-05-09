---
sidebar_position: 2
---

# Taxes
By creating invoices, you might need to append taxes to your customers regarding their required tax rate.
By default, a tax rate is assigned for all customers at the application level. However, you can decide to apply per-customer tax rates if needed.

It is useful to say that all charges for a customer are holding the same tax rate.

## General application settings taxes
By default, **Lago automatically applies a 0% tax rate** for the whole application. However, you can easily decide to change this value. The general tax rate is applied to all your customers and appended to all the charges, unless you decide to have a dedicated tax rate for a customer.

**To modify the general application tax rate**:
1. Go under the **`⚙️ Settings`** tab of the Lago app
2. Click on the **`Tax`** tab
3. Click on **`Edit tax rate`**
4. Apply you newly desired tax rate. This tax rate is applied for all customers unless they have a [per-customer tax rate](#per-customer-taxes) defined

## Per-customer taxes
If you need to append a specific tax rate to a dedicated customer, you can decide to overwrite the general tax rate settings by a per-customer tax rate. All charges of this specific customer will have a custom tax rate.

You can update the tax rate at a customer level from both the UI and the API.

### From the UI
1. Go under the **Customers** tab of the Lago app
2. Click on the customer for whom you want to edit the tax rate
3. In the *customer details view*, click on **Add a tax rate**
4. Add a new tax rate to this customer. This tax rate overwrites the one at the app level
5. You can delete or edit this per-customer tax rate anytime you want

### From the API
Use the following route to **add or edit a customer**.

```curl title="POST"
/api/v1/customers
```

To update a per-customer tax rate, use the argument `vat_rate` in the customer object.