 db.inventory.drop()
 db.inventory.insertMany(
    [
        { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
        { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
        { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
        { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
        { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] },
        { item: "postcard", qty: 45, tags: "red", dim_cm: [ 10, 15.25 ] },
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