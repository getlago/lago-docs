---
sidebar_position: 1
---

# Overview

Most of our users need a fully embedded alerting system. The most common use cases to trigger an alert are:
- When an invoice is emitted ([full workflow using zapier](invoice-alerting) is explained in this documentation);
- When a customer passes a "pay-as-you-go" threshold;
- When a new subscription has been assigned; or
- When an invoice's payment status has changed.

In this documentation, we explain how to build to the two first ones listed above. However, as Lago is API first, you can build an unlimited number of use cases, creating a global alerting system for your company.

To create a proper alerting system, you need to:
1. Fetch Lago's API regarding your use case;
2. Use a workflow builder solution, like n8n or Zapier; and
3. Connect the payload to a third party tool, like Slack for instance.

