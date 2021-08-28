select "cunt"."name",
        count("cit"."cityId") as "numOfCities"
  from "cities" as "cit"
  join "countries" as "cunt" using ("countryId")
  group by "cunt"."name"
