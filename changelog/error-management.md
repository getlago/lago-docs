---
date: 2022-10-06T10:00
---

# Error management
We have refactored the error management system to give more visibility to API users.

The `message` attribute for errors has been replaced with `code` and `error_details`, which provide more information about the errors. There are several codes associated with each error.

For example, when creating a new billable metric, the API may return `"error": "Unprocessable entity"` with the code `value_is_mandatory` for the `name` field (i.e. the name of the billable metric is missing).

Please refer to the [documentation](/docs/api/intro) available for each endpoint for more information on error codes.