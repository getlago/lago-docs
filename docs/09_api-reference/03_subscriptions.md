---
sidebar_position: 3
---

# Subscriptions

## Assign a subscription to a customer

## POST `/api/v1/subscriptions`

```json
{
  "subscription": {
    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "plan_code": "new_code"
  }
}
```

### Arguments

| Argument | Mandatory | Data type | Description |
|--|--|--|--|
| customer_id | **true** | **String** | Customer unique identifier in client application |
| plan_code | **true** | **String** | Unique Plan code.<br/>Defined in the lago application |

### Responses
