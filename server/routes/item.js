const express = require('express');
const app = express();

app.get('/item/:id', async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
