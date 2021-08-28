select "pay"."amount",
      "pay"."customerId",
      "cust"."firstName",
      "cust"."lastName"
  from "payments" as "pay"
  join "customers" as "cust" using ("customerId")
  order by "amount" desc
  limit 10
