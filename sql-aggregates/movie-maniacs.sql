select "customers"."firstName",
      "customers"."lastName",
      sum("films"."rentalRate") as "totalPaid"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "customers"."customerId"
  order by "totalPaid" desc
