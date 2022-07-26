const lengthProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: lengthProdutos });

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });