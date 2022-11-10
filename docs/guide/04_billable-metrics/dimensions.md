---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dimensions
When setting up your pricing, you may want to group events according to their property. To do so, you can create dimensions for your billable metric.

Consider the following example:

>Your company provides DevOps services and you want to charge your customers for compute capacity by the hour.
>
>In your Lago account, you create a `compute` billable metric that calculates the total number of hours (i.e. `SUM(properties.hours)`).
>
>As your customers can choose from different cloud providers, you need to group usage records (i.e. events) according to the provider.
>
>On the configuration page of your billable metric, you can define `"key": "provider"` and `"value": ["AWS","Google","Azure"]` to create the corresponding dimension (see snippet below).

```json title="Billable metric with one dimension"
{
    "key": "provider",
    "values": ["AWS", "Google", "Azure"]
}
```

It is also possible to define two levels for grouping events. Following our previous example:

>In addition to their cloud providers, your customers can select their region.
>
>Therefore, you can define `"key": "region"` to add a second dimension (see snippet below).
>
>When creating a plan, you will then be able to add a [charge](../plans/charges) for each provider and each region.

```json title="Billable metric with two dimensions"
{
  "key": "provider",
  "values": [
    {
      "name": "AWS",
      "key": "region",
      "values": ["Europe", "Africa", "Asia"]
    },
    {
      "name": "Google",
      "key": "region",
      "values": ["Europe", "North America"]
    },
    {
      "name": "Azure",
      "key": "region",
      "values": ["North America", "Asia"]
    }
  ]
}
```

You can also create billable metrics with dimensions [via the API](../../api/billable_metrics/create-billable-metric).

:::caution
Values are case-sensitive. If you don't use the exact value when pushing events, they will not be taken into account.
:::