---
sidebar_position: 6
---

# Invoice metadata

## Add metadata on invoice

Adding metadata to an invoice object can provide additional structured information and context. For example, after finalizing the invoice, you can define a key-value pair in the invoice object to store your local invoice ID from your government invoicing system. To do this:

1. Navigate to the Invoice detail page to target a specific invoice.
2. Click on "Add metadata";
3. Add your information in the drawer;
4. Note that a key cannot exist without its corresponding value, and vice versa; and
5. Save the metadata and find it in the invoice object.

## Edit metadata on invoice

**To edit metadata from the user interface:**

1. Navigate to the Invoice detail page to target a specific invoice.
2. Click on "Edit metadata";
3. Add, edit, remove your information in the drawer;
4. Note that a key cannot exist without its corresponding value, and vice versa; and
5. Save the metadata and find it in the invoice object.

**To edit metadata using the API:**

1. In your payload, locate the key-value pair with the metadata ID you want to edit;
2. Modify the key and/or value as needed.

:::info
When editing customer metadata through the API, make sure to include the existing metadata in your payload to avoid removing them.
:::

## Delete metadata on invoice


**To delete a key-value metadata pair from the user interface:**

1. Navigate to the Invoice detail page for the specific invoice.
2. Click on "Edit metadata".
3. Click on the trash icon next to the metadata you want to remove.
4. Save the changes and view them in the invoice object.

**To delete a key-value metadata pair from the API:**

1. Do not include the metadata ID you want to delete in your payload.

## Metadata in invoice PDF

Because the invoice PDF is generated on demand and the invoice information is already created, the invoice metadata will not be displayed on the invoice PDF file, but only in the invoice object.

## Invoice metadata limitations

1. We limit the number of metadata on customers to 5.
2. Keys must be strings under 20 characters.
3. Values must be strings under 40 characters.