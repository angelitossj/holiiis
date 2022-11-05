const {
    Schema,
    model
} = require('mongoose')
require('./modeloProveedores')
const ProductoSchema = new Schema({

    marca: {
        type: String,
        required: true

    },

    fechaVencimiento: {
        type: String,
        required: true
    },
    paisOrigen: {
        type: String,
        required: true
    },
    categorias: [{
            tipo: 'lacteos'
        },
        {
            tipo: 'bebidas'
        },
        {
            tipo: 'ropas'
        },
        {
            tipo: 'carne'
        },
        {
            tipo: 'frutasVerduras'
        }
    ],
    idProveedor: {
        type: Schema.ObjectId,
        ref: 'proveedor',
        required: true
    }







}, {
    versionKey: false,
    timestamps: true
})


module.exports = model("usuario", ProductoSchema)