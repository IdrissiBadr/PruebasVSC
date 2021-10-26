 db.inventory.drop()
 db.inventory.insertMany(
    [
        { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ], dateA: Date() },
        { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ], dateA: Date("2020-02-15") },
        { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ], dateA: new Date() },
        { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ], dateA: new Date("2020-03-20") },
        { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ], dateA: new Date("2020-05-25") },
        { item: "postcard", qty: 45, tags: "red", dim_cm: [ 10, 15.25 ], dateA: new Date("2020-02-30") },
    ]
 );
  db.inventory.find( { tags: ["red", "blank"] } )
  db.inventory.find( { tags: {$all: ["red", "blank" ] } } )
  db.inventory.find( { item: "journal"} )
  db.inventory.find( { tags: "red"} )
  db.inventory.find( { tags: {$eq: "red" } } )
  db.inventory.find( {qty: {$gt: 45,$lt: 100 } } )
  db.inventory.find( {dim_cm: {$gt: 21 } } )
  db.inventory.find( {dim_cm: {$gt: 15,$lt: 20 } } )
  db.inventory.find( {dim_cm: {$elemMatch: {$gt: 15,$lt: 20 } } } )