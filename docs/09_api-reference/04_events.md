---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Events

## Push an event for a customer

### Route

```
POST /api/v1/events
```

### Code samples

<Tabs>
  <TabItem value="curl" label="Curl" default>

  ```bash
  LAGO_URL="https://api.lago.dev"
  API_KEY="__CLIENT_API_KEY__"

  curl --location --request POST "$LAGO_URL/api/v1/events" \
  --header "Authorization: Bearer $API_KEY" \
  --header 'Content-Type: application/json' \
  --data-raw "{
      \"event\": { \
          \"customer_id\": \"__CUSTOMER_ID__\", \
          \"code\": \"__EVENT_CODE__\", \
          \"timestamp\": $(date +%s) \
      } \
  }"
  ```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

  ```ruby
  foo
  ```

  </TabItem>
</Tabs>

### Arguments


```json
{
  "event": {
    "customer_id": "__CUSTOMER_ID__",
    "code": "__EVENT_CODE__", // Replace with event code
    "timestamp": 1650893379,
    "properties": {
      "custom_field": 12
    }
  }
}
```

| Argument | Mandatory | Data type | Description |
|--|--|--|--|
| customer_id | **true** | **String** | Customer unique identifier in client application |
| code | **true** | **String** | Code of the matching billable metric defined in the lago application |
| timestamp | **false** | **Integer** | Unix timestamp of the event occurence. If not provided, the API will set the event reception time.
| properties | Depend on the aggregation type of the billable metric: `COUNT`: **false**,<br/>`COUNT UNIQUE`: **true**<br/>`MAX`: **true**<br/> `SUM`: **true** | **JSON** | Extra data to use for the event aggregation. When mandatory, it should contains the field name defined in the billable metric.


### Responses
