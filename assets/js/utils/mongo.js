/**
 * Extract ID from a MongoDB ObjectId.
 * @param _id {object} The ObjectId in the format {"$oid": "64fee803195efc210d79b0b4"}
 * @returns {string} The extracted ID.
 */
export const extractMongoObjectId = (_id) => {
    if (_id && _id.$oid) {
        return _id.$oid;
    } else {
        throw new Error("Invalid ObjectId format");
    }
};
