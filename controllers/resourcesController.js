const express = require("express");
const resources = express.Router()

const { getAllResources, getOneResource } = require("../queries/resources.js");

resources.get('/', async (req, res)=>{
    try {
        const allResources = await getAllResources();
        if (allResources[0]){
            res.status(200).json(allResources);
        } else {
            res.status(500).json({ error: "no resources found." });
        }
    } catch (error){
        console.log(error);
    }
});

resources.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const getResource = await getOneResource(id);
        if (getResource.id){
            res.status(200).json(getResource);
        } else {
            res.status(500).json({ error: "resource not found!" });
        }
    } catch (error){
        console.log(error);
    }
});

module.exports = resources;