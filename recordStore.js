var RecordStore = function(name, city, funds){
  this.name = name;
  this.city = city;
  this.funds = funds;
  this.inventory = [];
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
    this.funds -= record.price;
  },
  listRecords: function(recordArray){
    if(recordArray === undefined){
      var recordArray = this.inventory
    }
    recordArray.forEach(function(element){
      console.log(
        "Artist: " + element.artist +"\n"+
        "Album: " + element.title +"\n"+
        "Price: " + element.price);
    })
  },
  findRecordByName: function(albumName){
    var isName = function(value){
      return value.title === albumName;
    }
    var findRecord = this.inventory.find(isName);
    return findRecord;
  },
  sellRecord: function(name){
    var recordFromInventory = this.findRecordByName(name);

    var indexOfRecordSale = this.inventory.indexOf(recordFromInventory);
    var recordToSell = this.inventory.splice(indexOfRecordSale, 1);
    this.funds += recordToSell[0].price;
    return recordToSell[0]
  },
  listFinances: function(){
    var addCosts = function(num1, num2){
      return num1 + num2.price;
    };
    var recordValue = this.inventory.reduce(addCosts, 0);
    console.log("Store funds: " + this.funds + "\n" + "Records total Worth: " + recordValue);
    return recordValue;
  },
  getStock: function(record, quantity){
    var stockMap = new Map(this.inventory);
    if(stockMap.has(record)){
      var quantityFromMap = stockMap.get(record)
      var updatedQuantity = quantityFromMap + quantity;
      stockMap.set(record, updatedQuantity)
    } else {
      stockMap.set(record, quantity)
    };
  }

}

module.exports = RecordStore;