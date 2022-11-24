---
date: 2022-11-10T11:00
---

# Dimensions for grouping events
When creating a new billable metric, you can define dimensions that will be used to group events according to their properties.

For example, if you want to charge your customers for compute capacity according to the cloud provider and server region, you can create a `compute` billable metric with two dimensions ([learn more](../docs/guide/billable-metrics/dimensions)).

Changes to the API include:
- Ability to add a `group` parameter with one or two dimensions when [creating](../docs/api/billable_metrics/create-billable-metric) or [updating](../docs/api/billable_metrics/update-billable-metric) billable metrics;
- Ability to [retrieve the groups](../docs/api/billable_metrics/get-all-groups) associated with a billable metric;
- Ability to add a `group_properties` parameter when [creating](../docs/api/plans/create-plan) or [updating](../docs/api/plans/update-plan) a plan;
- Ability to retrieve [customer usage](../docs/api/customer_usage/customer-usage-object) by group; and
- New `lago_group_id` for fees (see [invoice object](../docs/api/invoices/invoice-object)).