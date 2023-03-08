---
sidebar_position: 2
---

# Metadata

## Add metadata on customer

Metadata on customer is useful for storing additional structured information on an object to provide more context.

For example, you could store a customer's full name and unique identifier from your system on a Customer object by defining a key-value pair. A key cannot exist without its corresponding value, and vice versa.

## Edit and delete metadata on customer

After adding metadata to a customer, you can edit or delete it. To edit metadata, you have two options:

1. Use the user interface to update the information displayed in the "Edit customer" drawer, and then save the customer changes.
2. Use the API to target the key-value pair information with the metadata ID in your code snippet and edit the key and value.

:::info
When editing customer metadata through the API, make sure to include the existing metadata in your payload to avoid removing them.
:::

Similarly, you can delete a key-value metadata pair by:

1. Clicking on the trash icon in the user interface, and then saving the customer changes.
2. Removing the key-value metadata object from your code snippet when using the API.

## Display metadata in invoice object

To display customer metadata on invoices, you can switch on the option in the customer creation/edition drawer or set `display_in_invoice` to true. Once this option is activated, metadata will be displayed on all new finalized and downloaded invoices.

:::info
When the customer's metadata is added/edited/removed, the change only applies to new PDF files. Existing documents are not affected.
:::

## Customer metadata limitiation

1. We are limiting the number of metadata on customers to 5.
2. Keys must be strings under 20 characters.
3. Values must be strings under 40 characters.