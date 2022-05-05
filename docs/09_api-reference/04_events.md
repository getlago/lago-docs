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
  LAGO_URL="https://api.getlago.com"
  API_KEY="__YOUR_API_KEY__"

  curl --location --request POST "$LAGO_URL/api/v1/events" \
  --header "Authorization: Bearer $API_KEY" \
  --header 'Content-Type: application/json' \
  --data-raw "{
      \"event\": { \
          \"transaction_id\": \"__UNIQUE_ID__\", \
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
    "transaction_id": "__UNIQUE_ID__",
    "customer_id": "__CUSTOMER_ID__",
    "code": "__EVENT_CODE__",
    "timestamp": 1650893379,
    "properties": {
      "custom_field": 12
    }
  }
}
```

#### transaction_id

| `type: string` | **required**

Unique ID identifying the event.<br/>
As it will be used for idem potency, it should be a unique identifier.

#### customer_id

| `type: string` | **required**

Customer unique identifier in your application.


#### code

| `type: string` | **required**

Code identifying the type of the event.<br/>
It should match the `code` property of one of your active billable metrics, otherwise it will be ignored.

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

<Tabs>
  <TabItem value="200" label="HTTP 200" default>

  The event has been stored in the system and will be aggregated to generate fees.

  Returns an empty response body.

  </TabItem>
  <TabItem value="400" label="HTTP 400">

  ```json
  {
    "status": 400,
    "error": "Bad Request",
  }
  ```

  The `event` json root is not present in the request body.

  </TabItem>
  <TabItem value="401" label="HTTP 401">

  ```json
  {
    "status": 401,
    "error": "Unauthorized",
  }
  ```

  Access to the API end point is unhautorized.

  Possible reasons are:
  * The `Authorization` header is missing
  * The `Authorization` header does not contains the API key
  * The Api key is invalid or expired


  </TabItem>
</Tabs>
