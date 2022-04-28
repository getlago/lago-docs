---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Events

TODO: Add a clear description of what are events.

## Send an event for a customer

### Route

```
POST /api/v1/events
```

### Usage

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

#### customer_id

| `type: string` | **required**

Customer unique identifier in your application.


#### code

| `type: string` | **required**

Code identifying the type of the event.<br/>
It should match the `code` property of one of your active billable metric.

#### timestamp

| `type: integer` | **optional** | *default: event reception timestamp*

Unix timestamp of the event occurence.<br/>
If not provided, the API will set the event reception time.

#### properties

| `type: json` | **variable**

Extra data to use for the event aggregation.<br/>
When mandatory, it should contains the `field_name` configured at billable metric level as `key` and any value as field `value`.

Aggregation type:
- `COUNT`: **optional**
- `MAX`: **required** | value must be an integer
- `SUM`: **required** | value must be an integer
- `COUNT UNIQUE`: **required** | value could have any datatype

### Responses

#### HTTP 200

`Empty response body`

The event has been stored in the system and will be aggregated to generate fees.

#### HTTP 401

```json
{
  "message": "Unauthorized"
}
```

Access to the API endpoint is unhautorized.

Possible reasons are:
- The `Authorization` header is missing
- The `Authorization` header does not contains the API key
- The Api key is invalid or expired
