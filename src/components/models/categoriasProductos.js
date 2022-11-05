const {
    Schema,
    model
} = require('mongoose')

require('../models/modeloProveedores')
const TareSchema = new Schema({

    tipo: {
        type: [{}],
        
    },
    
    isActive: {
        type: Boolean,
        default: true

    },


    idProveedores: {
        type:Schema.ObjectId,
        ref:'proveedores',
        required:true
    }

})


module.exports = model('categorias', TareSchema)