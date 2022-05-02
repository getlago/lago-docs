---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customers

TODO: Add a clear description of what are customers.

## Create or update a customer

### Route

```
POST /api/v1/customers
```

### Usage

<Tabs>
  <TabItem value="curl" label="Curl" default>

  ```bash
  LAGO_URL="https://api.lago.dev"
  API_KEY="__YOUR_API_KEY__"

  curl --location --request POST "$LAGO_URL/api/v1/customers" \
    --header "Authorization: Bearer $API_KEY" \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "customer": {
        "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
        "address_line1": "5230 Penfield Ave",
        "address_line2": null,
        "city": "Woodland Hills",
        "country": "US",
        "email": "dinesh@piedpiper.test",
        "legal_name": "Coleman-Blair",
        "legal_number": "49-008-2965",
        "logo_url": "http://hooli.com/logo.png",
        "name": "Gavin Belson",
        "phone": "1-171-883-3711 x245",
        "state": "CA",
        "url": "http://hooli.com",
        "zipcode": "91364"
      }
    }'
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
  "customer": {
    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "address_line1": "5230 Penfield Ave",
    "address_line2": null,
    "city": "Woodland Hills",
    "country": "US",
    "email": "dinesh@piedpiper.test",
    "legal_name": "Coleman-Blair",
    "legal_number": "49-008-2965",
    "logo_url": "http://hooli.com/logo.png",
    "name": "Gavin Belson",
    "phone": "1-171-883-3711 x245",
    "state": "CA",
    "url": "http://hooli.com",
    "zipcode": "91364"
  }
}
```

#### customer_id

 `type: string` | **required**

Customer unique identifier in your application.

:::info
If the customer already exists, the call will work as an update
:::

#### address_line1

|`type: string` | **optional**

First line of the billing address.

#### address_line2

|`type: string` | **optional**

Second line of the billing address.

#### city

|`type: string` | **optional**

City of the customer's billing address.

#### country

|`type: string` | ISO 3166 alpha 2 Country code. | **optional**

Country code of the customer's billing address.

#### email

|`type: string` | **optional**

Email of the customer.

#### legal_name

|`type: string` | **optional**

Legal company name of the customer.

#### legal_number

|`type: string` | **optional**

Legal company number of the customer.

#### logo_url

|`type: string` | **optional**

Logo URL of the customer

#### name

 `type: string` | **required**

Full name of the customer.

#### phone

|`type: string` | **optional**

Phone number of the customer.

#### state

|`type: string` | **optional**

State of the customer's billing address.

#### url

|`type: string` | **optional**

Custom URL of the customer.
#### zipcode

|`type: string` | **optional**

Zipcode of the customer's billing address.


### Responses

<Tabs>
  <TabItem value="200" label="HTTP 200" default>
  The customer was succesfuly created or updated.

  Returns a [customer](#customer-object) object.
  </TabItem>

  <TabItem value="400" label="HTTP 400">

  ```json
  {
    "status": 400,
    "error": "Bad Request"
  }
  ```

  The `customer` json is not present in the request body.
  </TabItem>

  <TabItem value="401" label="HTTP 401">

  ```json
  {
    "status": 401,
    "error": "Unauthorized"
  }
  ```

  Access to the API end point is unhautorized.

  Possible reasons are:
  * The `Authorization` header is missing
  * The `Authorization` header does not contains the API key
  * The Api key is invalid or expired


  </TabItem>

  <TabItem value="422" label="HTTP 422">


  ```json
  {
    "status": 422,
    "error": "Unprocessable entity",
    "message": "message",
    "error_details": {
      "field": ["message"]
    }
  }
  ```

  Possible error messages:
  - `Validation error on the record`: The `error_details` field contains the details of the errors

  | field | error | description |
  |--|--|--|
  | `customer_id` | `value_is_mandatory` | customer_id is missing |
  | `country` | `not_a_valid_country_code` | Provided country value is not an ISO 3166 country code |


  </TabItem>
</Tabs>


## Customer object

```json
{
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
    "zipcode": "91364"
  }
}
```

### Fields

#### lago_id

| `type: string` | **not null**

Unique identifer of the customer in Lago application.

#### customer_id

| `type: string` | **not null**

Unique identifer of the customer in your application.

#### address_line1

|`type: string` | **nullable**

First line of the billing address.

#### address_line2

|`type: string` | **nullable**

Second line of the billing address.

#### city

|`type: string` | **nullable**

City of the customer's billing address.

#### country

|`type: string` | ISO 3166 alpha 2 Country code | **nullable**

Country code of the customer's billing address.

#### email

|`type: string` | **nullable**

Email of the customer.

#### legal_name

|`type: string` | **nullable**

Legal company name of the customer.

#### legal_number

|`type: string` | **nullable**

Legal company number of the customer.

#### logo_url

|`type: string` | **nullable**

Logo URL of the customer

#### name

 `type: string` | **nullable**

Full name of the customer.

#### phone

|`type: string` | **nullable**

Phone number of the customer.

#### state

|`type: string` | **nullable**

State of the customer's billing address.

#### url

|`type: string` | **nullable**

Custom URL of the customer.
#### zipcode

|`type: string` | **nullable**

Zipcode of the customer's billing address.
