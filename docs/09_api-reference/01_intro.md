---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started

Lago API allows your application to push customer information and metrics (events) from your application to the billing application.

To integrate it into your application, you can use the JSON HTTP API or one of the Lago libraries (depending on your programing language or framework).

You must retrieve your API key from your account.

## Configuration

<Tabs>
  <TabItem value="curl" label="Curl" default>

  ```bash
  LAGO_URL="https://api.lago.dev"
  API_KEY="__YOUR_API_KEY__"

  curl --location --request POST "$LAGO_URL/api/v1/..." \
    --header "Authorization: Bearer $API_KEY" \
    --header 'Content-Type: application/json' \
    --data-raw '...'
  ```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

  ```ruby
  echo "test"
  ```

  </TabItem>
</Tabs>
