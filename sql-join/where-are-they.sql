select "addresses". "line1",
      "cities"."name",
      "addresses"."district"
  from "addresses"
  join "cities" using ("cityId")
