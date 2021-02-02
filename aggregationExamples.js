db.orders.insertMany(
  [
       {product: "toothbrush", total: 4.75, customer: "Mike"},
       {product: "guitar", total: 199.99, customer: "Tom"},
       {product: "milk", total: 11.33, customer: "Mike"},
       {product: "pizza", total: 8.50, customer: "Karen"},
       {product: "toothbrush", total: 4.75, customer: "Karen"},
       {product: "pizza", total: 4.75, customer: "Dave"},
       {product: "eggs", total: 4.75, customer: "Mike"},
  ]
)

// find out how many eggs were sold
db.orders.count({product: "eggs"})

// Find list of all products sold
db.orders.distinct("product")

// Find the total amount of money spent by each customer
db.orders.aggregate(
  [
       {$match: {} },
       {$group: {_id: "$customer", total: { $sum: "$total"} } }
  ]
)

// Find how much has been spent on each product and sort it by price
db.orders.aggregate(
  [
       {$match: {} },
       {$group: {_id: "$product", total: { $sum: "$total"} } },
       {$sort: {total: -1}}
  ]
)

// Find how much money each customer has spent on toothbrushes and pizza
db.orders.aggregate(
  [
       {$match: {product: {$in: ["toothbrush", "pizza"]} } },
       {$group: {_id: "$product", total: { $sum: "$total"} } },
  ]
)
















// Problem: 
// Return user name and role from the users list.

// Condition: 
// If the user has a role of type Teacher:
  //Return the school name and complete adress
// If the user is not a teacher:
  //return the role and email



db.users.aggregate([
  {$unwind: "$role"}
])






