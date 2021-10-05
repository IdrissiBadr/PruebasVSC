 db.inventory.deleteMany({})
 db.inventory.insertMany(
    [
        { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
        { item: "folder", qty: 90, tags: ["cotton","paper"], size: { h: 20, w: 37.5, uom: "cm" } },
        { item: "pen", qty: 10, tags: ["wood","graphite"], size: { h: 8, w: 10, uom: "cm" } },
        { item: "tablet", qty: 12, tags: ["metal","plastic"], size: { h: 30, w: 45.5, uom: "cm" } }, 
    ]
 )
 db.inventory.deleteMany({})
 db.inventory.insertMany(
    [
        { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
        { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
        { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
        { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
        { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
     ]
 )