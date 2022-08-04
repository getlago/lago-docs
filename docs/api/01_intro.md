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

<Tabs groupId="prog-language">
  <TabItem value="curl" label="Curl" default>

  ```bash
  LAGO_URL="https://api.getlago.com"
  API_KEY="__YOUR_API_KEY__"

  curl --location --request POST "$LAGO_URL/api/v1/..." \
    --header "Authorization: Bearer $API_KEY" \
    --header 'Content-Type: application/json' \
    --data-raw '...'
  ```

  </TabItem>

  <TabItem value="python" label="Python">

  **Install package with pip**
  ```bash
  pip install lago-python-client
  ```

  **Usage**

  ```python
  from lago_python_client import Client

  client = Client(api_key='__YOUR_API_KEY__')
  ```

  </TabItem>

  <TabItem value="ruby" label="Ruby">

  **Add the gem in your Gemfile**
  ```bash
  bundle add lago-ruby-client
  ```

  Or if bundler is not being used to manage dependencies, install the gem by executing:

  ```bash
  $ gem install lago-ruby-client
  ```

  **Usage**

  ```ruby
  require 'lago-ruby-client'

  client = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})
  ```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

  **Install package with npm**
  ```bash
  npm install lago-nodejs-client
  ```

  **Usage**

  ```javascript
  import Client from 'lago-nodejs-client'

  let client = new Client('__YOUR_API_KEY__')
  ```
  </TabItem>
  <TabItem value="go" label="Go">

  **Install package**
  ```bash
    go get github.com/getlago/lago-go-client/v1
  ```

  **Usage**

  ```go
    import "github.com/getlago/lago-go-client/v1"

    func main() {
      lagoClient := lago.New().
        SetApiKey("__YOU_API_KEY__")
    }
  ```
  </TabItem>
</Tabs>
