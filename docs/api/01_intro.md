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
  <TabItem value="javascript" label="Javascript">

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
    go get github.com/getlago/lago-go-client@v0.1.0-alpha.1
  ```

  **Usage**

  ```go
    import "github.com/getlago/lago-go-client"

    func main() {
      lagoClient := lago.New().
        SetApiKey("__YOU_API_KEY__")
    }
  ```
  </TabItem>
  <TabItem value="csharp" label="C#">

  **Install package**
  ```bash
  nuget pack -Build -OutputDirectory out Org.OpenAPITools.csproj
  ```

  **Usage**

  ```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class Example
    {
        public static void Main()
        {

            Configuration.Default.BasePath = "https://api.getlago.com/api/v1";
            // Configure HTTP bearer authorization: bearerAuth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

        }
    }
}
  ```
  </TabItem>

  <TabItem value="php" label="PHP">

  **Composer**
  ```json
  {
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
    }
}
  ```

  **Manual installation**

  ```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
  ```

  **Getting started**

  ```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure Bearer authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new OpenAPI\Client\Api\AddOnsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
  ```
  </TabItem>

</Tabs>
