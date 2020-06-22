const request = require("supertest");
const app = require("../app");

test("test full log after two posts", async () => {
  await request(app)
    .post("/api")
    .send({
      board: ["O", "O", "_", "X", "_", "_", "_", "X", "X"],
      winner: "none",
    })
    .then(async () => {
      await request(app)
        .post("/api")
        .send({
          board: ["O", "O", "O", "X", "_", "_", "_", "X", "X"],
          winner: "O",
        });
    })
    .then(async () => {
      await request(app)
        .get("/api")
        .expect((res) => {
          expect(res.body[0]["_moves"] === ["O", "O", "_", "X", "_", "_", "_", "X", "X"]);
          expect(res.body[0]["_winner"] === "none");
          expect(res.body[1]["_moves"] === ["O", "O", "O", "X", "_", "_", "_", "X", "X"]);
          expect(res.body[1]["_winner"] === "O");
        });
    });
});

test("response code test", async () => {
  request(app).get("/api").expect(200);
});
