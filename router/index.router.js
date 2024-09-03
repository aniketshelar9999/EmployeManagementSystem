const express = require("express"),
      router = express.Router();

    const employeController = require("../Controller/Employe.Controller");


    router.post("/createEmploye", employeController.createEmploye);
    router.put("/updateEmploye",employeController.updateEmploye);
    router.delete("/deleteEmploye",employeController.deleteEmploye); 
    router.get("/getAllEmploye",employeController.getAllEmployes); 
    router.get("/getOneEmploye",employeController.getOneEmploye);

    module.exports = router;