var assert = require("assert");
var RecordStore = require("../recordStore");
var Record = require("../record");

describe("Record Store", function(){
  var recordStore;
  var record;
  var record2;

  beforeEach(function(){
    recordStore = new RecordStore("My Record Store", "Edinburgh", 500);
    record = new Record("AC/DC","Back in Black", 5);
    record2 = new Record("Pink Floyd","The Dark Side of the Moon", 10);
  });

  it("should have a name", function(){
    assert.equal("My Record Store", recordStore.name);
  })
  it("should have a city", function(){
    assert.equal("Edinburgh", recordStore.city);
  })
  it("should have an empty inventory to start", function(){
    assert.deepEqual([], recordStore.inventory);
  })
  it("should have some money", function(){
    assert.equal(500, recordStore.funds);
  })

  it("should be able to hold records", function(){
    recordStore.addRecord(record, 10);
    recordStore.addRecord(record2, 20);
    assert.deepEqual([record, record2],recordStore.inventory)
  })
  it("should display all records to console", function(){
    recordStore.addRecord(record, 10);
    recordStore.addRecord(record2, 20);
    recordStore.listRecords();
    assert.equal(1,1)
  })
  it("should be able to sell records", function(){
    
    recordStore.addRecord(record, 10);
    recordStore.addRecord(record2, 20);
    
    recordStore.sellRecord("Back in Black");
    assert.deepEqual([record2], recordStore.inventory);
    assert.equal(490, recordStore.funds)
  })
  it("should be able to keep track of store finances", function(){
    recordStore.addRecord(record, 10);
    recordStore.addRecord(record2, 20);
    assert.equal(15, recordStore.listFinances());
  })

})