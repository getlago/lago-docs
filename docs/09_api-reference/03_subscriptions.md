---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Subscriptions

TODO: Add a clear description of what are subscriptions.

## Assign a plan to a customer

### Route

```
POST /api/v1/subscriptions
```

### Usage

<Tabs>
  <TabItem value="curl" label="Curl" default>

  ```bash
  echo "test"
  ```
  </TabItem>
  <TabItem value="ruby" label="Ruby">

  ```ruby
  echo "test"
  ```
  </TabItem>
</Tabs>

### Arguments


```json
{
  "subscription": {
    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "plan_code": "new_code"
  }
}
```

####  customer_id

| `type: string` | **required**

Customer unique identifier in your application.

:::info
If the customer is not found, it will be created with blank metadata
:::

####  plan_code

| `type: string` | **required**

Code identifying the plan.<br/>
It must match the `code` property of one of the plans.

### Responses

#### HTTP 200

The plan was succesfuly assigned to the customer. A subscription has been created.

Returns a [subscription](#subscription-object) object.

#### HTTP 400

```json
{
  "status": 400,
  "error": "Bad Request"
}
```

The `subscription` json is not present in the request body.

#### HTTP 401

```json
{
  "status": 401,
  "error": "Unauthorized"
}
```

Access to the API end point is unhautorized.

Possible reasons are:
- The `Authorization` header is missing
- The `Authorization` header does not contains the API key
- The Api key is invalid or expired

#### HTTP 422

```json
{
  "status": 422,
  "error": "Unprocessable entity",
  "message": "message"
  }
}
```

Possible error messages:
- `plan does not exists`: The plan code does not match an exisiting plan.

## Terminate a subscription

### Route

```
DELETE /api/v1/subscriptions
```
### Usage

<Tabs>
  <TabItem value="curl" label="Curl" default>

  ```bash
  echo "test"
  ```
  </TabItem>
  <TabItem value="ruby" label="Ruby">

  ```ruby
  echo "test"
  ```
  </TabItem>
</Tabs>


### Arguments

```json
{
  "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba"
}
```

####  customer_id

| `type: string` | **required**

Unique identifer of the subscription in Lago application.

### Response

#### HTTP 200

The customer subscription was successfully terminated.

Returns a [subscription](#subscription-object) object.

#### HTTP 400

```json
{
  "status": 400,
  "error": "Bad Request"
}
```

The mandatory argument `customer_id` is not present in the request body.

#### HTTP 401

```json
{
  "status": 401,
  "error": "Unauthorized"
}
```

Access to the API end point is unhautorized.

Possible reasons are:
- The `Authorization` header is missing
- The `Authorization` header does not contains the API key
- The Api key is invalid or expired

#### HTTP 422

```json
{
  "status": 422,
  "error": "Unprocessable entity",
  "message": "message"
  }
}
```

Possible error messages:
- `not_found`: The provided customer was not found or does not have a subscription.

## Subscription object

```json
{
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
  }
}
```

### Fields

#### lago_id

| `type: string` | **not null**

Unique identifer of the subscription in Lago application.

#### lago_customer_id

| `type: string` | **not null**

Unique identifer of the customer in Lago application.

#### customer_id

| `type: string` | **not null**

Unique identifer of the customer in your application.

#### canceled_at

| `type: string` | **nullable**

ISO 8601 date<br/>
Cancelation date of the subscription. It's not null when the subscription is `canceled`.

#### created_at

| `type: string` | **not null**

ISO 8601 date<br/>
Creation date of the subscription.

#### plan_code

| `type: string` | **not null**

Code identifying the plan.<br/>
It matches the `code` property of one of the plans.

#### started_at

| `type: string` | **nullable**

ISO 8601 date<br/>
Start date of the subscription. It could be null if the subscription is `pending` of `canceled`.

#### status

| `type: string` | **not null**

Status of the subscription.

Possible values:
- `pending`: a previous subscription has been downgraded, the current one is waiting for its automatic activation at the end of the billing period.
- `active`: the subscription is currently applied to the customer.
- `terminated`: the subscription is not active anymore
- `canceled`: the subscription has been stopped before its activation. It could happen when two consecutive downgrade have been applied to a customer or when a subscription with a pending one is terminaded.

#### terminated_at

| `type: string` | **nullable**

ISO 8601 date<br/>
Termination date of the subscription. It's not null when the subscription is `terminated`.
