---
sidebar_position: 2
---

# Fees
A fee is a line item in an invoice. There are two types of fees:
- **Subscription fees** that correspond to the base amount of the plan; and
- **Charge fees** that correspond to usage-based charges (i.e. the costs associated with each billable metric).

Information about fees includes (but is not limited to):
- Type;
- Amount;
- Currency; and
- Taxes.

The fee object is embedded in the invoice object, as illustrated below.

```json title="Fee object as shown in the invoice object"
{
  "webhook_type": "invoice.created",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "3687084e-7153-4ed3-acdb-5fc242091c7b",
    "sequential_id": 18,
    "number": "TWI-2B86-001-018",
    "issuing_date": "2023-05-08",
    "invoice_type": "subscription",
    "status": "finalized",
    "payment_status": "pending",
    "currency": "USD",
    "fees_amount_cents": 10000,
    "vat_amount_cents": 0,
    "coupons_amount_cents": 0,
    "credit_notes_amount_cents": 0,
    "sub_total_vat_excluded_amount_cents": 10000,
    "sub_total_vat_included_amount_cents": 10000,
    "total_amount_cents": 10000,
    "prepaid_credit_amount_cents": 0,
    "file_url": null,
    "version_number": 3,
    "legacy": false,
    "amount_currency": "USD",
    "vat_amount_currency": "USD",
    "credit_amount_currency": "USD",
    "total_amount_currency": "USD",
    "amount_cents": 10000,
    "credit_amount_cents": 0,
    "customer": {
      "lago_id": "37cee916-5751-4665-9774-aa05bb1a2ffd",
      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
      "name": "Gavin Belson",
      "sequential_id": 1,
      "slug": "TWI-2B86-001",
      "created_at": "2022-06-01T09:01:12Z",
      "country": "US",
      "address_line1": "5230 Penfield Ave",
      "address_line2": null,
      "state": "CA",
      "zipcode": "91364",
      "email": "dinesh@piedpiper.test",
      "city": "Woodland Hills",
      "url": "http://hooli.com",
      "phone": "1-171-883-3711 x245",
      "logo_url": "http://hooli.com/logo.png",
      "legal_name": "Coleman-Blair",
      "legal_number": "49-008-2965",
      "currency": "USD",
      "timezone": null,
      "applicable_timezone": "UTC",
      "billing_configuration": {
        "invoice_grace_period": null,
        "payment_provider": null,
        "vat_rate": 0,
        "document_locale": null
      }
    },
    "subscriptions": [
      {
        "lago_id": "2b500c4b-3e73-4b8b-ab28-6ceb2db12744",
        "external_id": "f7642c0d-ca06-4cae-8f43-36533a9799f4",
        "lago_customer_id": "37cee916-5751-4665-9774-aa05bb1a2ffd",
        "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
        "name": null,
        "plan_code": "premium",
        "status": "active",
        "billing_time": "anniversary",
        "subscription_at": "2023-05-08T00:00:00Z",
        "started_at": "2023-05-08T00:00:00Z",
        "terminated_at": null,
        "canceled_at": null,
        "created_at": "2023-05-08T13:40:29Z",
        "previous_plan_code": null,
        "next_plan_code": null,
        "downgrade_plan_date": null,
        "subscription_date": "2023-05-08"
      }
    ],
    // highlight-start
    "fees": [
      {
        "lago_id": "1b7a692a-6d5f-4438-8095-283ab8dd9bd7",
        "lago_group_id": null,
        "lago_invoice_id": "3687084e-7153-4ed3-acdb-5fc242091c7b",
        "lago_true_up_fee_id": null,
        "lago_true_up_parent_fee_id": null,
        "item": {
          "type": "subscription",
          "code": "premium",
          "name": "Premium",
          "lago_item_id": "2b500c4b-3e73-4b8b-ab28-6ceb2db12744",
          "item_type": "Subscription"
        },
        "amount_cents": 10000,
        "amount_currency": "USD",
        "vat_amount_cents": 0,
        "vat_amount_currency": "USD",
        "total_amount_cents": 10000,
        "total_amount_currency": "USD",
        "units": "1.0",
        "events_count": null,
        "external_subscription_id": "f7642c0d-ca06-4cae-8f43-36533a9799f4",
        "payment_status": "pending",
        "created_at": "2023-05-08T13:40:32Z",
        "succeeded_at": null,
        "failed_at": null,
        "refunded_at": null,
        "from_date": "2023-05-08T00:00:00+00:00",
        "to_date": "2023-06-07T23:59:59+00:00"
      }
    ],
    // highlight-end
    "credits": []
  }
}
```

## Rounding rules for Lago fees
Lago rounds the Lago fees to the nearest unit (e.g., cents). For example, if the fee is 0.175, Lago will round up to 0.18. If the fee is 0.174, Lago will round down to 0.17.

The tax rate is calculated at the item level and the total amount is rounded after summing all the items on the invoice.

|                      | Amount | Tax rate | Tax amount | Total amount (before rounding) | Total amount (after rounding) | Total |
|----------------------|--------|----------|------------|--------------------------------|-------------------------------|-------|
| Line item 1          | $0.17  | 20%      | $0.034     |                                |                               |       |
| Line item 2          | $4.46  | 20%      | $0.892     |                                |                               |       |
| Subtotal (excl. tax) | $4.63  |          |            |                                |                               |       |
| Tax amount           |        |          | $0.926     |                                |                               |       |
| Subtotal (incl. tax) |        |          |            | $5.556                         | $5.56                         |       |
| Total                |        |          |            |                                |                               | $5.56 |