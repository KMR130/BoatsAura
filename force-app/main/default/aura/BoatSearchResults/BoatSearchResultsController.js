({
	doInit : function(component, event, helper) {
		helper.onSearch(component,helper,"");
	},
    
    doSearch : function(component, event, helper) {
        var args = event.getParam('arguments');
        
        if(args) {
            /*console.log("Recieved boatTypeId in Method : ", args.boatTypeId);*/
            helper.onSearch(component,helper,args.boatTypeId);
        }
        
    },
    onBoatSelect : function(component, event, helper) {
        var eve = event.getParam('boatId');
        component.set("v.selectedBoatId",eve);
    },
}) 