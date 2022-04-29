---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customers

## Create a customer

### Route

```
POST /api/v1/customers
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
  "customer": {
    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
    "name": "Gavin Belson",
    "country": "US",
    "address_line1": "5230 Penfield Ave",
    "address_line2": null,
    "state": "CA",
    "zipcode": "91364",
    "email": "dinesh@piedpiper.test",
    "city": "Woodland Hills",
    "url": "http://hooli.com",
    "phone": "1-171-883-3711 x245",
    "logo_url": "http://hooli.com/logo.png",
    "legal_name": "Coleman-Blair",
    "legal_number": "49-008-2965",
  }
}
```

#### customer_id

 `type: string` | **required**

Customer unique identifier in your application.

:::info
If the customer already exists, the call will work as an update
:::

#### name

 `type: string` | **required**

Full name of the customer.

#### country

|`type: string` | **optional**

ISO 3166 alpha 2 Country code.<br/>
Country code of the customer's billing address.

#### address_line1

|`type: string` | **optional**

First line of the billing address.

#### address_line2

|`type: string` | **optional**

Second line of the billing address.

#### state

|`type: string` | **optional**

State of the customer's billing address.

#### zipcode

|`type: string` | **optional**

Zipcode of the customer's billing address.

#### email

|`type: string` | **optional**

Email of the customer.

#### city

|`type: string` | **optional**

City of the customer's billing address.

#### url

|`type: string` | **optional**

Custom URL of the customer.

#### phone

|`type: string` | **optional**

Phone number of the customer.

#### logo_url

|`type: string` | **optional**

Logo URL of the customer

#### legal_name

|`type: string` | **optional**

Legal company name of the customer.

#### legal_number

|`type: string` | **optional**

Legal company number of the customer.

### Responses
