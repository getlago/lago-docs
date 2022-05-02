---
sidebar_position: 6
---

# Invoices

TODO: Add a clear description of what are invoices.

## Invoice object

```json
{
  "webhook_type": "invoice.created",
  "object_type": "invoice",
  "invoice": {
    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "sequential_id": 2,
    "from_date": "2022-04-01",
    "to_date": "2022-04-30",
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
  }
}
```

### Fields

#### lago_id

| `type: string` | **not null**

Unique identifer of the invoice in Lago application.

#### sequential_id

| `type: integer` | **not null**

Invoice unique number

#### from_date

| `type: string` | ISO 8601 date | **not null**

Lower bound of the billing period.

#### to_date

| `type: string` | ISO 8601 date | **not null**

Upper bound of the billing period.

#### issuing_date

| `type: string` | ISO 8601 date | **not null**

Date of creation of the invoice.

#### amount_cents

| `type: integer` | **not null**

Amount in cents, VAT excluded.

#### amount_currency

| `type: string` | **not null**

Currency of the amount.

#### vat_amount_cents

| `type: integer` | **not null**

Vat amount in cents.

#### vat_amount_currency

| `type: string` | **not null**

Currency of the VAT amount.

#### total_amount_cents

| `type: integer` | **not null**

Total amount in cents.<br/>
Should be the sum of the amount and the VAT amount.

#### total_amount_currency

| `type: string` | **not null**

Currency of the total amount.

#### customer

| `type: json` | [Customer object](/docs/api-reference/customers#customer-object) | **not null**

Billed customer.

#### subscription

| `type: json` | [Subscription object](/docs/api-reference/subscriptions#subscription-object) | **not null**

Billed subscription.

#### fees

| `type: json` | Array of [fee](#fee-object) object | **not null**

## Fee object

```json
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
```

### Fields

#### item

| `type: json` | **not null**

Item attached to the fee.

Always have 3 attributes:
- `type`: `charge` or `subscription`
- `code`: Code of the plan or of the billable metric attached to the fee.
- `name`: Name of the plan of of the billable metric attached to the fee.

#### amount_cents

| `type: integer` | **not null**

Amount in cents of the fee, VAT excluded.

#### amount_currency

| `type: string` | **not null**

Currency of the amount.

#### vat_amount_cents

| `type: integer` | **not null**

VAT amount in cents.

#### vat_amount_currency

| `type: string` | **not null**

Currency of the VAT amount.
