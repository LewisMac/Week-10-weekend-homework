// var RecordStore = require("./recordStore");

var Customer = function(name, funds){
  this.name = name;
  this.funds = funds;
  this.recordsBought = [];
}

Customer.prototype = {
  buyRecord: function(recordName, recordStore){
    // console.log(recordName);
    var recordBought = recordStore.sellRecord(recordName);
    this.recordsBought.push(recordBought);
  },
  sellRecord: function(recordName, recordStore){
    var isName = function(value){
      return value.title === recordName;
    }
    var recordSold = this.recordsBought.find(isName)
    var indexOfRecordSale = this.recordsBought.indexOf(recordSold);
    this.recordsBought.splice(indexOfRecordSale, 1);
    recordStore.addRecord(recordSold);
    this.funds += recordSold.price;
  }
};

module.exports = Customer;
