---
id: person
title: The Person Record
---

# Core Person Information

## Name

### Mailing Name

:::important

This name is calculated based on other parts of the name

:::

The Preferred Mailing Name is what is used for the address line of all mailing files.


### Salutation

Used for Dear *Salutation* in merged documents and emails

### Name Tag Name

:::tip

This name includes the Alumni's last name at Macalester.

:::

It is calculated based on name combinations, and can be overwritten to be custom.

## Spouse

### Relation

Spouse is defined as type of relationship in Slate.  It is possible to have a non-ided Spouse, so sometimes we have to do some checking to make sure the data is right and where it should be.j


## School

### Alumni

Alumni are coded as **Record Type** = Alumni

### Mac Grads

Mac Grad Indicator is coded on the Person Record.  **Mac Grad** = Yes.

|  Base  | Field   | Value |
|--------|---------|-------|
|Person  |Mac Grad | Yes   |

**ALSO**

|  Base     | Field  | Value |
|-----------|---------          |-------|
|School     |CEEB Code          | 6390  |
|School     |Non Grad Indicator | *not equal to* **Yes** |

### UWC Scholars

**Davis United World College** schools are marked as such on the school (Organization) record within Slate.  All High School degrees that are considered 'United World Colleges (UWC)' are marked with the [CEEB Code](organization#ceeb-code) = 000002

|  Base  | Field   | Value |
|--------|---------|-------|
|School  |CEEB Code| 000002|

:::tip

Here is an [Example Query](https://engage.macalester.edu/manage/query/build?id=8bd6da8b-2c8e-4839-999d-bef6697eb745)

:::