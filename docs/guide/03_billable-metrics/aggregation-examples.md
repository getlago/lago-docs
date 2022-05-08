---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Aggregation examples
Image you are a Tracking API company (such as [Segment.com](https://www.segment.com/)). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers.

## Example of events received
You decided to charge the `Tracked Pages`. **This is your Billable metric.** Here are the 2 events sent by your backend to Lago, based on the consumption of a customer:

```json title="Event received n°1"
{
    "transaction_id": "1111-1111-1111-1111",
    "customer_id": "1",
    "timestamp": "2022-03-16T00:00:00Z",
    "code": "tracked_pages",
    "properties": {
		    "tracked_user_id": "1234-5678-9098-7654"
			"pageviews": 10
	}
}
```

```json title="Event received n°2"
{
    "transaction_id": "2222-2222-2222-2222",
    "customer_id": "1",
    "timestamp": "2022-03-17T00:00:00Z",
    "code": "tracked_pages",
    "properties": {
		    "tracked_user_id": "1234-5678-9098-7654",
			"pageviews": 20
	}
}
```
Let's see below the differences between the aggregation types.

## Differences between the aggregation types
| Aggregation           | Code                                                                | Units to be charged  |
| ----------------------| --------------------------------------------------------------------| --------------------- |
| **COUNT**             | `COUNT(tracked_pages)`                                              | 2                     |
| **SUM**               | `SUM(tracked_pages.properties.pageviews)`                           | 30                    |
| **MAX**               | `MAX(tracked_pages.properties.pageviews)`                           | 20                    |
| **COUNT DISTINCT**    | `DISTINCT_COUNT(tracked_pages.properties.tracked_user_id)`          | 1                     |


Based on the aggregation type you defined for you Billable metric `Tracked Pages`, the result that is going to be charged to your customer is completely different. Make sure to choose the right aggregation type for all your Billable metrics. If you need help, don't hesitate to reach out the Lago Team!