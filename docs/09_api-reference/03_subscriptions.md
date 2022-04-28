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
It must match the `code` property of one of plans.

### Responses

#### HTTP 200

```json
{
  "subscription": {
    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",
    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",
    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "plan_code": "new_code",
    "status": "active",
    "started_at": "2022-04-28 15:53:03 UTC",
    "terminated_at": null,
    "canceled_at": "2022-04-28 15:53:03 UTC",
    "created_at": "2022-04-28 15:53:03 UTC"
  }
}
```

The plan was succesfuly assigned to the customer. A subscription has been created.

TODO: describe the field and the data types

#### HTTP 401

```json
{
  "message": "Unauthorized"
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
  "message": "Unprocessable entity",
  "errors": {
    "field": ["message"]
  }
}
```

TODO
