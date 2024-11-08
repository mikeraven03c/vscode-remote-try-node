'use strict';

import e from "express";

export class LemonLoader {
  init() {
    // Constants
    const PORT = 3000;
    const HOST = '0.0.0.0';

    // App
    const app = e();
    app.get('/', (req, res) => {
      res.send('Hello remote world!\n');
    });

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
  }
}