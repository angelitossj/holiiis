const {
    Schema,
    model
} = require('mongoose')
require('./categoriasProductos')
const ProveedoresSchema = new Schema({

    nombre: {
        type: String,
        min: 6,
        max: 20


    },
    razonSocial: {
        type: String,
        mix: 10,
        require
    },
    cedulaIdentidad:{
        type:String,
        required:true
    },
    DomicilioEmpresa:{
type: String,
required:true


    },
    telefono:{
        type: Number,
        required:true



    },
    email: {
        type: String,
        min: 15,
        max: 30
    },
    password: {
        type: String,
        min: 19,
        max: 50

    },
    isActive: {
        type: Boolean,
        default: true

    },
    role: {
        type: String,
        default:'proveedor'
    },
    idCategorias: {
        type:Schema.ObjectId,
        ref:'categorias',
        required:true
    }







}, {
    versionKey: false,
    timestamps: true
})


module.exports = model("proveedores", ProveedoresSchema)