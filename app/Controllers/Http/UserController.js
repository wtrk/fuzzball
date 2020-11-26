"use strict";
const Database = use("Database");
const Env = use("Env");
const fuzz = use("fuzzball");

class UserController {
  async test(request, response) {
    const tableData = await Database.table("fuzzball_tbl");
    let newArray = tableData.map((eParent, iParent) => {
      let fuzz_ratio = 0;
      tableData.forEach((eChild, iChild) => {
        if (iParent != iChild) {
          if (fuzz_ratio < fuzz.ratio(eParent.name, eChild.name))
            fuzz_ratio = fuzz.ratio(eParent.name, eChild.name);
        }
      });
      return {
        name: eParent.name,
        fuzz: fuzz_ratio,
      };
    });
    newArray.forEach(async (e) => {
      await Database.table("fuzzball_tbl")
        .where("name", e.name)
        .update("fuzz", e.fuzz);
    });
  }
}

module.exports = UserController;

