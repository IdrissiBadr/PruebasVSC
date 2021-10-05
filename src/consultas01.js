/*
Todos los documentos con todos sus campos
*/
db.collection01.find()
/*
Todos los documentos de la coleccion
*/
db.inventory.find( {} )
/*
Los que tienen status con "D"
*/
db.inventory.find( { status: "D" } )
/*
$eq
*/
db.inventory.find( { status: { $eq: "D" } } )