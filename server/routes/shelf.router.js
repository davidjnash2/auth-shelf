const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the items on the shelf
 */

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "item"`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('error geting items', err);
    res.sendStatus(200); // For testing only, can be removed
  })
  
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", (req, res) => {
	if (req.isAuthenticated()) {
    const desc = req.body.description;
    const userID = req.user.id; // <-------------------------- POTENTIAL PROBLEM
    const url = req.body.image_url;

		console.log(req.user.id); // <------------------------------- CHECK HERE
		console.log(req.body.user_id);
		console.log(req.body.description);
		console.log(req.body.image_url);

		let postQuery = `
    INSERT INTO item ("description","image_url","user_id")
    VALUES ($1,$2,$3);
    `;
		pool.query(postQuery, [desc, url, userID])
    .then((response)=>{
      console.log('Successful POST', response);
      res.sendStatus(201)

    }).catch((err)=>{
      console.log('Error with POST', err);
      res.sendStatus(500)

    });
	}else{
    res.sendStatus(403)
  }
	// endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
	// endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
	// endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
	// endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
	// endpoint functionality
});

module.exports = router;
