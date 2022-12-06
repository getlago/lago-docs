---
date: 2022-12-06T18:00
---

# New calculation method for invoices
In preparation for the release of the [credit note feature](https://github.com/getlago/lago/issues/59) and based on feedback from accountants, we will introduce changes to the way coupons and prepaid credits are taken into account in the calculation of invoices.

Currently, [coupons](../docs/guide/coupons) and [prepaid credits](../docs/guide/prepaid_credits) are deducted from the amount before tax - for example:

```
CURRENT INVOICE CALCULATION
-----------------------------
All subscriptions = $50
All usage-based fees = $20
Coupons = $10
Prepaid credits = $30
-----------------------------
Subtotal = $30
Tax (10%) = $3
Total due = $33
```

From Thursday onwards, **coupons and prepaid credits will be deducted from the amount after tax**.

Following the previous example:

```
NEW INVOICE CALCULATION
-----------------------------
All subscriptions = $50
All usage-based fees = $20
-----------------------------
Subtotal (excl. tax) = $70
Tax (10%) = $7
-----------------------------
Subtotal (incl. tax) = $77
Coupons = $10
Prepaid credits = $30
Total due = $37
```

Credit purchases will be considered as advance payments. Therefore, **the tax rate will no longer be applied to the purchase of credits**.

These changes will take effect on **Thursday, December 8th 2022**. No action is required on your part.

Please contact us at [hello@getlago.com](mailto:hello@getlago.com) if you have any questions.