// const expect = require("chai").expect;
// const request = require("supertest");
// const app = require("../server");
// const db = require("../models/index");
// const PORT = process.env.PORT || 3000;

// const data = {
//   name: "Nikhil",
//   address: "Lucknow"
// };

// // before(async function() {
// //   await db.sequelize.sync({ force: true }).then(() => {
// //     app.listen(PORT, () => {
// //       console.log(PORT);
// //     });
// //   });
// // });
// //show all records
// it("Should be able to lists all records", async () => {
//   const res = await request(app)
//     .get("/api/user/show/all-records")
//     .set("Accept", "application / json")
//     .expect(200);
//   console.log(PORT);
// });

// // show by id
// it("Should be able to lists records by id", async () => {
//   const res = await request(app)
//     .get("/api/user/show/1")
//     .set("Accept", "application / json")
//     .expect(200);
// });

// //delete by id
// it("Should be able to delete records by id", async () => {
//   const res = await request(app)
//     .delete("/api/user/delete/1")
//     .set("Accept", "application / json")
//     .expect(200);
// });

// // add records
// it("Should be able to add records", async () => {
//   const res = await request(app)
//     .post("/api/user/add-records")
//     .send(data)
//     .set("Accept", "application / json")
//     .expect(200);
//   // .then(response => {
//   //   expect(response.body).to.be.a("object");
//   // });
// });

// // update records
// it("Should be able to update records by id", async () => {
//   const res = await request(app)
//     .put("/api/user/update-records/1")
//     .send(data)
//     .set("Accept", "application / json")
//     .expect(200);
// });
