select "storeId",
        count("filmId") as "filmCt"
  from "inventory"
group by "storeId"
