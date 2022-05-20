const db = require("../db/dbConfig.js");

const getAllResources = async() => {
    try {
        const allResources = await db.any(
            "SELECT * FROM resources"
        )
        return allResources;
    } catch (error) {
        return error;
    }
};
const getOneResource = async (id) => {
    try {
        const oneResource = await db.one(
            "SELECT * FROM resources WHERE id=$1",
            id
        );
        return oneResource;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllResources,
    getOneResource
}