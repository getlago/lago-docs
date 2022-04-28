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

### Code samples

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

| Argument | Mandatory | Data type | Description |
|--|--|--|--|
| customer_id | **true** | **String** | Customer unique identifier in client application |
| name | **true** | **String** | Customer full name |
| country | **false** | **String**<br/>ISO 3166 alpha 2 Country code | Country code of the customer |
| address_line1 | **false** | **String** | First line of address |
| address_line2 | **false** | **String** | Second line of address |
| state | **false** | **String** | State of the customer |
| zipcode | **false** | **String** | Zipcode of customer |
| email | **false** | **String** | Email of the customer |
| city | **false** | **String** | City of the customer |
| url | **false** | **String** | Custom URL of the customer |
| phone | **false** | **String** | Phone number of the customer |
| logo_url | **false** | **String** | Logo URL of the customer |
| legal_name | **false** | **String** | Legal company name of the customer |
| legal_number | **false** | **String** | Legal company number of the customer |

### Responses
