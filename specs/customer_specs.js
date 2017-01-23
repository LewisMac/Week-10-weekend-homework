var assert = require("assert");
var RecordStore = require("../recordStore");
var Record = require("../record");
var Customer = require("../customer");

describe("Customer", function(){
  var customer;
  var recordStore;
  var record1;
  var record2;

  beforeEach(function(){
    customer = new Customer("Frank", 20)
    recordStore = new RecordStore("My Record Store", "Edinburgh", 500)
    record1 = new Record("AC/DC","Back in Black", 5);
    record2 = new Record("Pink Floyd","The Dark Side of the Moon", 10);
    record3 = new Record("Michael Jackson","Thriller", 6);
    recordStore.addRecord(record1, 10);
    recordStore.addRecord(record2, 20);
    recordStore.addRecord(record3, 20);
    recordStore.addRecord(record3, 20);
  });

  it("Should have a name", function(){
    assert.equal("Frank", customer.name);
  })
  it("Should have funds", function(){
    assert.equal(20, customer.funds);
  })
  it("Shouldn't have records to begin with", function(){
    assert.deepEqual([], customer.recordsBought);
  })

  it("Should be able to buy records", function(){
    customer.buyRecord("The Dark Side of the Moon", recordStore)
    assert.deepEqual([record2], customer.recordsBought);
  })

  it("should be able to sell records to the store", function(){
    customer.buyRecord("Thriller", recordStore);
    customer.buyRecord("The Dark Side of the Moon", recordStore);
    customer.buyRecord("Back in Black", recordStore);
    customer.buyRecord("Thriller", recordStore);
    customer.sellRecord("Thriller", recordStore);
        assert.deepEqual([record2, record1, record3], customer.recordsBought);
  })
  
})