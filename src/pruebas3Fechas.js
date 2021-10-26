db.fechas.deleteMany({})
db.fechas.insertMany(
    [
        {año: 1999, mes: 2, dia: 18},
        {año: 2007, mes: 6, dia: 29},
        {año: 2021, mes: 2, dia: 1},
        {año: 2017, mes: 12, dia: 24},
    ]

);