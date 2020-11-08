export default async (req, res) => {
  if (req.method === "GET") {
    await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f2b32f6b20msh4d34b3635d0ebf6p18c16ajsn4d97f0ee5491",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    return { error: "Method not allowed" };
  }
};
