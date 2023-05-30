---
sidebar_position: 5
---

# Volume

Select the volume charge model if you want to define several price tiers but want to apply a **single unit price based on the total volume**. You can also apply a **flat fee** in addition to the unit price.

Consider the following example, where each unit represents an API call:

| Tier   | First unit | Last unit | Unit price | Fixed fee |
| ------ | ---------- | --------- | ---------- | --------- |
| Tier 1 | 0          | 10,000    | $0.0010    | $10       |
| Tier 2 | 10,001     | 50,000    | $0.0008    | $10       |
| Tier 3 | 50,001     | 100,000   | $0.0006    | $10       |
| Tier 4 | 100,001    | ∞         | $0.0004    | $10       |

In this case, 65,000 API calls would cost 65,000 x $0.0006 + $10 = $49.

:::tip
Note that this charge model is not compatible with a [charge paid in advance](../cadence#charges-paid-in-advance)
:::