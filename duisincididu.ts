
const functions = require('@google-cloud/functions-framework');

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('helloContent', (req, res) => {
  const transaction = req.body.transaction;
  const storage = transaction.storage();
  const data = storage.data();

  res.send(`Hello ${data.name}!`);
});

