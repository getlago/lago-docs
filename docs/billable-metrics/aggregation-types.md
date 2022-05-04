---
sidebar_position: 2
---

# Aggregation Types
By selecting one of the **aggregation types** for a Billable metric, you define how the ingested events are compiled and calculated at the end of a billable period.

Here is the full list of aggregation types currently supported officially by Lago.

| Aggregation | Description                                            | Transcription  |
| --------    | ------------------------------------------------------ | ------------------------- |
| **COUNT**   | Count the number of times an incoming event occurs     | `COUNT(event.code)` |
| **SUM**       | Sum a defined property for incoming events           | `SUM(event.properties.property_name)`
| **MAX**       | Get the maximum value of a defined property for incoming events              | `MAX(event.properties.property_name)` |
| **COUNT DISTINCT**  | Get the number of unique value of a defined property for incoming events   |  `COUNT_DISTINCT(event.properties.property_name)` |

Except the `COUNT`(that is counting the number of times an event occurs), the other types aggregate over a single property of the event. **The result of this aggregation will be used to charge your customers.**

You can find more description and examples below.

:::info
Note that these aggregation rules are used to calculate usage-based behaviors. 
Other existing solutions name it `meter` or `metering`.
:::

## 1. COUNT
Count the number of times an incoming event occurs. During a billable period, each time a defined event is flowing in, Lago will increment the final result. At the end of the billable period, this result resumes to 0.

This aggregation rule is very useful when you have to calculate a simple behavior.

`COUNT.event.code`


## 2. SUM
Sum a defined property for incoming events. During a billable period, each time a defined event is flowing in, Lago will sum the defined property. At the end of the billable period, this sum resumes to 0.

This aggregation type is very useful to sum the consumption, such as the *number of pageviews* or the *number of gigabytes used*, for instance.

`SUM(event.properties.property_name)`

:::caution
As a `SUM` returns a number, the single property you aggregate on **must be numeric value**.
:::

## 3. MAX
Get the maximum value of a defined property for incoming events. During a billable period, Lago will get the maximum value received for a defined property. At the end of the billable period, this value resumes to 0.

This aggregation is very useful to get the maximum usage of a feature, such as *the maximum number of rows* or *the maximum compute time of a server*, for instance.

`MAX(event.properties.property_name)`

:::caution
As a `MAX` returns a number, the single property you aggregate on **must be numeric value**.
:::


## 4. COUNT DISTINCT
Get the number of unique value of a defined property for incoming events. During a billable period, Lago will deduplicate the number of events received over a single property. At the end of the billable period, this value resumes to 0.

This aggregation is very useful to deduplicate, such as the *number of tracked users* or *the number of active rows*, for instance.

`COUNT_DISTINCT(event.properties.property_name)`
