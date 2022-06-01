---
sidebar_position: 1
---

# Overview
Lago automatically generates invoices for each of your customers at the end of a billing period (monthly or yearly depending on the plan assigned to the customers). These invoices are generated under the webhook type `invoice.created`. You can use this webhook to build a proper PDF invoice or to print the information on a webpage.

## What are the invoices made up of? 
By generating an invoice, Lago displays you all the detailed information about a customer's usage. The invoice is composed of fees (each Billable metric is charged as an invoice fee item) and a total invoice amount.

**Several concepts are important to understand while working with invoices:**
1. **The taxes**: add taxes and VAT to a customer
2. **The fees**: invoice items generated and charged as customer's usage