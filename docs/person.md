---
id: person
slug: /
title: The Person Record
---

# Core Person Information

## Name

The **Name** field in a Slate Query, is the Sort Name.  Confusing.  I know.

### Name Preferred

The **Name - Preferred** is what is used for the address line of all mailing files.

*Note* : As of Sep. 2020 gendered Prefixes {Mr., Mrs., Ms.} are not on a person's Preferred Mailing name by Default.  If the person requests, it will be added back.

### Name - Mailing Line1

This is the first line of a Mailing address Name Line.   Per our Business rules, in a couple, it is the spouse's name first.

### Name - Mailing Line2

This is the first line of a Mailing address Name Line.   Per our Business rules, in a couple, it is the person's name second.


### Salutation

Used for Dear *Salutation* in merged documents and emails.  This is ONLY the persons first name (usually, sometimes a constituent prefers to be address at "Dr. Jones")


### Email Salutation

This is generally the same as the Salutation field.  *HOWEVER* there are some household that share an email address.  In this case, we use the [**Joint Salutation**](#salutation---joint).

### Salutation - Joint

This only has data for joint households.  It includes both of the donor's **Salutation**.


### Name Tag Name

:::tip

This name includes the Alumni's last name at Macalester.

:::

It is calculated based on name combinations, and can be overwritten to be custom.


### Parent Suffix

This is the collection of Class Years of a person's children when they were/are at Macalester.  It is 2 digit year, with no prefix   (i.e. '98, '06)

###  Grandparent Suffix 

Same as Parent, but for grandparents.

## Spouse

### Relation

Spouse is defined as type of relationship in Slate.  It is possible to have a non-ided Spouse, so sometimes we have to do some checking to make sure the data is right and where it should be.j


## Household

### Head of Household

A.K.A. **Primary** household member.  This field is used most often for merging households 

:::warning

Using Head of Household for merging can sometimes inadvertanlty leave a household out of a mailing.  For instance, if the HOH is not in a Reunion Year, but their spouse is.  If you have any concerns about about to merge your file, please talk to ADV I.S.

:::

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

### Class Year

The Class year is the **preferred** class year of the alumni.  It will not always be the same as the graduation year with the Registrar.  Our goal is to build affinity groups.  If an alum prefers to be invited to things like reunion for a particular class, then we are going to honor that request and include them with the affinity group of their choice.

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

*Source* : This is sourced from an **A**ctive "Do Not Email" Mailing List record on the person.

### Do Not Mail

*Coded* : This is stored on the Mailing List status of Do Not Mail with a Status of Active.  This is sourced from an **A**ctive "Do Not Solicit by Mail" Mailing List record on the person.

### Do Not Phone

*Coded* : This is stored on the Mailing List status of Do Not Phone with a Status of Active

### Do Not Solicit

*Coded* : This is coded on the Person Record with a Solicit Control Code of 'Do Not Solicit"

### No Advancement Email

*Coded* : This is stored on the Mailing List status of Do Not Mail with a Status of Active

### Giving is Anonymous

This donor has asked to never share details of their giving to Macalester.  On any donor lists, the name should be "Anonymous".


## Special Information

## FlagTag

The FlagTag is any special piece of information about the record, that should be known by anyone in the office.  

### Event Attendance Alert

This note is for internal use only.  It is used to add additional information about the person and how they should be tended to in regards to campus and alumni events.

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


## Giving Summary

### Lifetime Giving

The total amount of dollars received by the donor to date.  NOte, this does not include Planned Gifts or outstanding pledges.



## Other

### Vegetarian

For event planning purposes.  Is the person a Vegetarian.

### Staff Assigned

Primary person assigned to the record.