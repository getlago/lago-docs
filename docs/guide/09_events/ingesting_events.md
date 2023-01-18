---
sidebar_position: 1
---

# Ingesting events
This guide explains how Lago ingests usage-based events coming from your application.

## Define a Billable metric
**Usage events are designed to target very specific [Billable metrics](../billable-metrics/overview) created from the UI**. If you don't understand the concept of Billable metrics, we recommend you to read it first.

First things first, you need to define a Billable metric from the UI to send usage measurement events:
1. In the Lago App, go to the **Billable metrics** section
2. Click on the `Add a Billable metric` button
3. Fill the Billable metric informations.
    - A `name`
    - A `code` (this is used as the event name when ingesting measurement events)
    - A `description` *(optional)*
4. Choose the **Aggregation type** to define how ingested events must be calculated at the end of the billable period

A Billable metric must be representative of a paying feature of your company. Based on your customers' actions within your application, implemented events are automatically triggered, aggregated and calculated by Lago.

## Send usage measurements to Lago
To send usage events to Lago, you need to use the **Lago API**. A measurement event is JSON with the following fields:

```json
{
    "external_customer_id": "__CUSTOMER_ID__", // (Required) Unique identifier of your customer performing the action
    "code": "__EVENT_CODE__", // (Required) Your Billable metric's Code
    "timestamp": 1650893379, // (Required) Timestamp when the event happened
    "properties": { // (Optional) Custom variables defined as properties
      "custom_field": 12
    }
}
```
### 1. The `transaction_id`
The `transaction_id` is very useful to ensure the uniqueness of the events received. It is mandatory to define on your own a unique `transaction_id` for each event you send to Lago.

This identifier is used to deduplicate events ingested, making sure we don't ingest twice the same event (otherwise, this could create billing errors for your customers).
- If a `transaction_id` is new to Lago, the event is ingested;
- If a `transaction_id` has already been received by Lago, it's ignored.

:::tip
**A good practice is to send the id of the transaction coming from your backend**.

If you do not have an existing id for a transaction, you can create a unique one by concatenating the `code` of the Billable metric and the `timestamp` of the event *(example: `api_searches_2022-04-01T03:49:23Z`).
:::

### 2. The `external_customer_id`
The `external_customer_id` specifies which one of your customers is triggering the event associated with your billing. For now **a customer can only have one ID** and we don't manage aliases, parents and child IDs (for instance, billing subsidiaries).
By receiving an event, if an `external_customer_id` is new to Lago, it will be created in the Customers list.

### 3. The event `code`
The event `code` represents the unique code of the Billable metric you want to start ingest measurements on.
This code is required for all events received in Lago. For instance, you can start ingesting events for Billable metrics with codes `api_seaches` *(for api products example)*, `storage` *(cloud companies example)*, `atm_withdrawals` *(fintech example)*, or anything you need to define as a paying feature.

### 4. The event `timestamp`
The event timestamp is the date when the billing event occurs in your application and sent to Lago. This event must be a **[UNIX Timestamp](https://www.unixtimestamp.com/).** For instance, you could define `1650893379` for *Mon Apr 25 2022 13:29:39 GMT+0000* or `1651682217`for *Wed May 04 2022 16:36:57 GMT+0000*.

**This `timestamp` is not mandatory to send the event**. If you do not specify a timestamp on your own, Lago automatically defines the reception date of the event as the event timestamp.

### 5. The event `properties`
Event properties are useful to send more context in usage events. Moreover, they are also very useful when you need to aggregate a Billable metrics for `SUM`, `MAX` and `COUNT DISTINCT`. Event properties can be `strings`, `integers`, `floats`, `uuids` or `timestamps`.

## Idempotency and retries
By using a unique `transaction_id`, can send events to Lago as much as you want without worrying about sending twice the same event. Duplicates will be ignored by our system. This ensures that your customers' usage is counted once. In case of duplicates, we guarantee that only one of the events will be ingested, and the other ones are ignored.

In case you are not sure if an event has been ingested, we recommend you to send it multiple times (or to replay it). Once again, with the uniqueness of the `transaction_id`, your customers won't be badly affected.

## User action trigger or periodic trigger
With Lago, you can define when you need to trigger events based on the actions your customers make in your application.
There are 2 ways of tracking billing events with Lago.

### User action trigger
Anytime a user perform an action in your product, this sends an event to Lago. This can be useful for companies tracking usage with a lot of granularity. As we do the math for you, you can send events whenever you need and don't compute hard calculations on your own.

For instance, think of a *fintech company* tracking user action. Each time a customer withdraw money at an ATM, you send an event to Lago. We aggregate the usage of a billable period based on what you defined in a Billable metric called `atm_withdrawals`.

### Periodic trigger
Some companies, such as infrastructure or cloud ones, often use periodic triggers to calculate consumption. Think of the example of a thermometer to measure fever. We would probably track the temperature once per hour (at a periodic time). This is the same for cloud companies selling computation. You could send an event to Lago each single minute measuring the CPU consumption of a customer.

## Designed for flexibility
Lago is designed to ingest a high number of events. By defining aggregation rules, you can define any billing  use cases your company might want to track. Whether you need to send **[user action triggered](#user-action-trigger)** events or **[periodic triggered](#periodic-trigger)** events, Lago does the math on your own so you don't have to query heavy databases before charging your customers.

## Next steps
Once you defined your Billable metrics (with their aggregation rules), and started ingesting events to track usage, you are able to define how much your customers will pay for it. This has to be specified in **[Plans](../plans/overview)**.
