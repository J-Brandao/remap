const express = require("express");
const { get } = require("../Models/Utilizadores");
//const checkJwt = require("../Utils/checkJwt");

const router = express.Router();

router.route("/:id")
    .get(async (req, res) => {
    const utilizador = await get(req.params.id);
    
    if (!utilizador) {
      res.status(404);
      res.json(false);
      res.end();
  
      return;
    }
  
    res.status(200);
    res.json(utilizador);
    res.end();
    })
    /* delete ---> .post(checkJwt, async (req, res) => {

    const edificio = await create(req.body);
    
    res.json(edificio);
    res.status(201);
    res.end();

    })*/;

module.exports = router;