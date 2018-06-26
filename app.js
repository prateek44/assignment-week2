(function()
{
  'use strict';
  angular.module('cartApplication',[])
  .controller('addToBuyListController',addToBuyListController)
  .controller('alreadyBoughtListController',alreadyBoughtListController)
  .service('manipulateItemListService',manipulateItemListService);
  addToBuyListController.$inject=['manipulateItemListService'];
  function addToBuyListController(manipulateItemListService)
  {
    console.log('addToBuyListController');
    var ctrlAddToList=this;
    ctrlAddToList.addToCart=[{name:"cookies",qty:"5"},
    {name:"candies",qty:"40"},
  ,{name:"pie",qty:"44"},
{name:"breads",qty:"5"}
,{name:"jellies",qty:"44"}];


ctrlAddToList.addToBoughtItemsList=function(itemQty,itemName)
{

manipulateItemListService.addToBoughtItemsList(itemQty,itemName);

};





  };
  alreadyBoughtListController.$inject=['manipulateItemListService'];
  function alreadyBoughtListController(manipulateItemListService)
  {
    console.log('alreadyBoughtListController');
    var ctrlAlreadyAddedList=this;
    ctrlAlreadyAddedList.alreadyAddedList=manipulateItemListService.getUpdatedList();
  };
  function manipulateItemListService()
  {
    console.log('manipulateItemListService');
    var service =this;
    var arr=[];
    service.addToBoughtItemsList=function(itemQty,itemName)
    {
      var item={
        name:itemName
        ,qty:itemQty
      };
      arr.push(item);
      console.log('item added successfully');
    };
    service.getUpdatedList=function()
    {
      console.log('getUpdatedList called');
      return arr;
    };

  };
})();
