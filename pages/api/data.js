export default function data(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ status: "working" });
  } else if (req.method == "POST") {
    const { gender, age, likes, dislikes } = req.body;

    let products = [];

    res.status(200).json(products);
  } else {
    res.status(400).json("Bad Request");
  }
}
