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
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "from_date": "2022-04-01",
    "to_date": "2022-04-30",
    "charges_from_date": "2022-04-01",
    "issuing_date": "",
    "amount_cents": 100,
    "amount_currency": "EUR",
    "vat_amount_cents": 20,
    "vat_amount_currency": "EUR",
    "total_amount_cents": 120,
    "total_amount_currency": "EUR",
    "customer": {
      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
      "address_line1": "5230 Penfield Ave",
      "address_line2": null,
      "city": "Woodland Hills",
      "country": "US",
      "created_at": "2022-04-29T08:59:51Z",
      "email": "dinesh@piedpiper.test",
      "legal_name": "Coleman-Blair",
      "legal_number": "49-008-2965",
      "logo_url": "http://hooli.com/logo.png",
      "name": "Gavin Belson",
      "phone": "1-171-883-3711 x245",
      "state": "CA",
      "url": "http://hooli.com",
      "vat_rate": 20.0,
      "zipcode": "91364"
    },
    "subscription": {
      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
      "canceled_at": "2022-04-29T08:59:51Z",
      "created_at": "2022-04-29T08:59:51Z",
      "plan_code": "new_code",
      "started_at": "2022-04-29T08:59:51Z",
      "status": "active",
      "terminated_at": null
    },
    // highlight-start
    "fees": [
      {
        "item": {
          "type": "subscription",
          "code": "plan_code",
          "name": "Plan"
        },
        "amount_cents": 100,
        "amount_currency": "EUR",
        "vat_amount_cents": 20,
        "vat_amount_currency": "EUR"
      }
    ]
    // highlight-end
  }
}
```