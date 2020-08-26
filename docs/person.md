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


## Solicit Control

We track a number of solicit control codes to make sure that we do not communicate with our alumni and constituents in ways that they do not like.

|  Base  | Field   | Value |
|--------|---------|-------|
|Person  |Solicit - Do Not Email | Yes/No   |
|Person  |Solicit - Do Not Mail | Yes/No   |
|Person  |Solicit - Do Not Phone | Yes/No   |
|Person  |Solicit - Do Not Solicit | Yes/No   |
|Person  |Solicit - No Advancement Emails | Yes/No   |

### Do Not Email

*Coded* : This is equivalent to the the advance "NAE" code, or No Alumni Email.

### Do Not Mail

*Coded* : This is stored on the Mailing List status of Do Not Mail with a Status of Active

### Do Not Phone

*Coded* : This is stored on the Mailing List status of Do Not PHone with a Status of Active

### Do Not Solicit

*Coded* : This is coded on the Person Record with a Solicit Control Code of 'Do Not Solicit"

### No Advancement Email

*Coded* : This is stored on the Mailing List status of Do Not Mail with a Status of Active

## Giving Societies

To recognize donors giving at a certain level or designation, we have differently names Giving Societies.

|  Base  | Field   | Value |
|--------|---------|-------|
|Giving  |Giving Society - James Wallace | Yes/No   |
|Giving  |Giving Society - Grand | Yes/No |

### James Wallace Giving Society

The James Wallace Giving Society is for donors who have told us (formally or informally) that they have designated Macalester College in their will or estate provisions.

### Grand Society

Donors who contribute at $1600 or more a year

### Young Grand Society

To recognize a recent Alumni's economic situation, there are different levels of giving that will qualify a donor for Grand Society.  

:::note

This is based on the "oldest" alumni class year in a household.  
*i.e. if a 2020 grad is married to a 2016 we treat the household as 2016*

:::

| Years Out | Band | Giving Level |
|:---:|:---:|---:|
| 0 | 1 | $200 |
| 1 | 1 | $200 |
| 2 | 1 | $200 |
| 3 | 1 | $200 |
| 4 | 1 | $200 |
| 5 | 2 | $400 |
| 6 | 2 | $400 |
| 7 | 2 | $400 |
| 8 | 3 | $800 |
| 9 | 3 | $800 |
| 10+ | na | $1600 |

