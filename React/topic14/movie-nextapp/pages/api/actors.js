import actors from "../../mocks/actors/actors.json";

export default function actorsAPI(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Success", result: actors });
    return;
  }

  if (req.method === "POST") {
    if (!req.body) {
      res.status(404).json({ message: "Not found items" });
      return;
    }

    res.status(201).json({ message: "Created", items: req.body });
    return;
  }
}
