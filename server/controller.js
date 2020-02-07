  
module.exports = {
    showInventory : (req, res) => {   
        const db = req.app.get('db')

        db.getInventory()
        .then(products => res.status(200).send( products ))
    },

    createProduct : ( req, res ) => {
        const db = req.app.get('db')
        const { image, name, price } = req.body
        db.createProduct([image, name, price])
        .then( () => res.sendStatus(200) )
    },

    deleteProduct : ( req, res ) => {
        const db = req.app.get('db');
        const { id } = req.params;
        
        db.deleteProduct( id )
        .then( () => res.sendStatus(200))
    },

    updateProduct : (req,res) => {
        const db = req.app.get('db')
        const { params } = req

        db.editProduct([params.id, req.body.name, req.body.price, req.body.img])
            .then((product) => res.status(200).send(product))
    }
    }