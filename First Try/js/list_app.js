var app = {};

ListItemModel = Backbone.Model.extend({
	defaults:{
		name: "",
		editDate: "01/01/1900",
		size: "500mb",
	}
});

ListItemsCollection = Backbone.Collection.extend({
	model: ListItemModel,
	localStorage: new Store("backbone-applist")
});

ListItemsView = Backbone.View.extend({
	el:  "#main_container",
	events:{
		"click #new_list_item" : "createNewItem"
	},
	createNewItem: function(){
		alert("Here!");
	}
});

$(document).ready(function(){
	app.listItems = new ListItemsCollection();
	app.listItemsView = new ListItemsView();
});