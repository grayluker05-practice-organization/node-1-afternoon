const products = require('../products.json');

const getProduct = function(req, res){
    const item = products.find(val => val.id === +req.params.id);
    if(!item){
        return res.status(500).send("Item not on list");
    }
    res.status(200).send(item);
}

module.exports = getProduct;