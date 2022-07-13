---
date: 2022-07-13T18:00
---

# Released new API endpoints

We like our users when they use our nice and clean UI, but we also love when they use our API. One of the usecase could be to use Lago as a white-labeled solution.

Here is the full list of endpoints we have just released:

**Billable metrics**
- Create a billable metric `POST /api/v1/billable_metrics`
- Update a billable metric `PUT /api/v1/billable_metrics/:code`
- Destroy a billable metric `DELETE /api/v1/billable_metrics/:code`
- Fetch a specific billable metric `GET /api/v1/billable_metrics/:code`
- Fetch all billable metrics `GET /api/v1/billable_metrics?per_page=2&page=1`

**Plans**
- Create a plan `POST /api/v1/plans`
- Update a plan `PUT /api/v1/plans/:code`
- Destroy a plan `DELETE /api/v1/plans/:code`
- Fetch a specific plan `GET /api/v1/plans/:code`
- Fetch all plans `GET /api/v1/plans?per_page=2&page=1`

**Coupons**
- Create a coupon `POST /api/v1/coupons`
- Update a coupon `PUT /api/v1/coupons/:code`
- Destroy a coupon `DELETE /api/v1/coupons/:code`
- Fetch a specific coupon `GET /api/v1/coupons/:code`
- Fetch all coupons `GET /api/v1/coupons?per_page=2&page=1`

**Add-ons**
- Create a add_on `POST /api/v1/add_ons`
- Update a add_on `PUT /api/v1/add_ons/:code`
- Destroy a add_on `DELETE /api/v1/add_ons/:code`
- Fetch a specific add_on `GET /api/v1/add_ons/:code`
- Fetch all add_ons `GET /api/v1/add_ons?per_page=2&page=1`

**Current usage**
- Get the current usage of a specific customer `GET /api/v1/customers/:customer_id/current_usage`

**Organization**
- Update the information of your organization `PUT /api/v1/organizations`

