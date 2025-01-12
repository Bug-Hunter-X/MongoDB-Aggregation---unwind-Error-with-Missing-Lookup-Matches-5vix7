```javascript
db.collection.aggregate([
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments"
    }
  },
  {
    $addFields: {
      relatedDocuments: {
        $ifNull: [ {
          $arrayElemAt: ["$relatedDocuments", 0] }, null ]
      }
    }
  },
  {
    $unwind: "$relatedDocuments"
  },
  {
    $group: {
      _id: "$relatedDocuments.someField",
      sum: {
        $sum: "$someField"
      }
    }
  }
]);
```