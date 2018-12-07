## save collection data

mongoexport --db flashCards --collection cards --out scripts/flashtest.json

## upload collection data
mongoimport --db flashCards --collection cards --file scripts/flashtest.json

## The international format defined by ISO (ISO 8601)

The international format defined by ISO (ISO 8601) tries to address all these problems by defining a numerical date system as follows:  YYYY-MM-DD where

- YYYY is the year [all the digits, i.e. 2012]
- MM is the month [01 (January) to 12 (December)]
- DD is the day [01 to 31]
- For example, "3rd of April 2002", in this international format is written: 2002-04-03.

| Date type | Format |
|-------|----------------|
| Year: | `YYYY` (eg 1997) |
| Year and month: | `YYYY-MM` (eg 1997-07)
| Complete date:  | `YYYY-MM-DD` (eg 1997-07-16)
| Complete date plus hours and minutes: | `YYYY-MM-DDThh:mmTZD` (eg 1997-07-16T19:20+01:00)
| Complete date plus hours, minutes and seconds: |`YYYY-MM-DDThh:mm:ssTZD` (eg 1997-07-16T19:20:30+01:00)

[ISO (ISO 8601) link](https://www.w3.org/TR/NOTE-datetime)