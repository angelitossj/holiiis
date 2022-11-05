const router = require('express').Router()

const {
getProveedores,
postProveedores,
putProveedores,
deleteProveedores,
getProveedoresId





}=require("../controllers/ctrlProveedores")



router.get("/proveedores",getProveedores)
router.post("/proveedores",postProveedores)
router.get("/proveedores",getProveedores)
router.get("/proveedores/:idProveedores",getProveedores)
router.put("/proveedores/:idProveedores",putProveedores)
router.delete("/proveedores/:idProveedores",deleteProveedores)
// router.delete("/Cliente/:idCliente",[validarJWT],deleteCliente)


module.exports=router