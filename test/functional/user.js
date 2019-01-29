const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../routes/routes");

const data = {
  name: "Nikhil",
  address: "Lucknow"
};

it("Should be able to lists all records", async () => {
  const res = await request(app)
    .get("/api/user/show/all-records")
    .set("Accept", "application / json")
    .expect(200);
});

// show by id
it("Should be able to lists records by id", async () => {
  const res = await request(app)
    .get("/api/user/show/1")
    .set("Accept", "application / json")
    .expect(200);
});

//delete by id
it("Should be able to delete records by id", async () => {
  const res = await request(app)
    .delete("/api/user/delete/1")
    .set("Accept", "application / json")
    .expect(200);
});

// add records
it("Should be able to add records", async () => {
  const res = await request(app)
    .post("/api/user/add-records")
    .send(data)
    .set("Accept", "application / json")
    .expect(200);
});

// update records
it("Should be able to update records by id", async () => {
  const res = await request(app)
    .put("/api/user/update-records/1")
    .send(data)
    .set("Accept", "application / json")
    .expect(200);
});
