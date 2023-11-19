const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  var data = [
    {
      id: 0,
      name: "Epic Designs",
      stars: 3.5,
      description:
        "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 57,
      years: 8,
      price: "$$",
      numbers: ["+91-984532853", "+91-984532854"],
      shortlisted: false,
    },
    {
      id: 1,
      name: "Studio D3",
      stars: 3.5,
      description:
        "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 57,
      years: 8,
      price: "$$",
      numbers: ["+91-984532853", "+91-984532854"],
      shortlisted: false,
    },
    {
      id: 2,
      name: "Epic Designs",
      stars: 3.5,
      description:
        "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 57,
      years: 8,
      price: "$$",
      numbers: ["+91-984532853", "+91-984532854"],
      shortlisted: false,
    },
  ];
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
