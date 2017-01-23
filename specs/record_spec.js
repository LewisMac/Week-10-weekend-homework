var assert = require("assert");
var Record = require("../record");

describe("Record", function(){
  var record;

  beforeEach(function(){
    record = new Record("AC/DC","Back in Black", 5);
  });

  it("should have an Artist", function(){
    assert.equal("AC/DC", record.artist)
  })
  it("should have a Title", function(){
    assert.equal("Back in Black", record.title)
  })
  it("should have a Price", function(){
    assert.equal(5, record.price)
  })
})