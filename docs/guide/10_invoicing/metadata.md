---
sidebar_position: 6
---

# Invoice metadata

## Add metadata on invoice

Adding metadata to an `invoice` object can provide additional structured information and context. For example, after finalizing the invoice, you can define a key-value pair in the `invoice` object to store your local invoice ID from your government invoicing system. To do so:

1. Navigate to the Invoice detail page to target a specific invoice;
2. Click on "Add metadata";
3. Add the information (kindly note, a key cannot exist without its corresponding value, and vice versa); and
4. Save to confirm.

:::info
The invoice metadata will be included in the `invoice` object but will not be displayed on the PDF file.
:::

## Edit metadata on invoice

**To edit metadata from the user interface:**

1. Navigate to the Invoice detail page to target a specific invoice;
2. Click on "Edit metadata";
3. Add, edit, remove information (kindly note, a key cannot exist without its corresponding value, and vice versa); and
4. Save to confirm.

**To edit metadata using the API:**

1. In your payload, locate the key-value pair with the metadata ID you want to edit; and
2. Modify the key and/or value as needed.

:::tip
When editing invoice metadata through the API, please make sure to include the existing metadata in your payload to avoid removing it.
:::

## Delete metadata on invoice

**To delete a metadata key-value pair from the user interface:**

1. Navigate to the Invoice detail page for the specific invoice;
2. Click on "Edit metadata";
3. Click on the trash icon next to the metadata you want to remove; and
4. Save to confirm.

**To delete a metadata key-value pair from the API:**

1. Do not include the metadata ID you want to delete in your payload.

## Invoice metadata limitations

1. You can add up to 5 metadata key-value pairs;
2. Keys must be strings of 20 characters maximum; and
3. Values must be strings of 255 characters maximum.
