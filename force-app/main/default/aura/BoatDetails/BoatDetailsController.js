({
    onBoatSelected : function(component, event, helper) {
        //console.log("entered boatdetails");
        var data=event.getParam('boat');
        component.set("v.id", data.Id);
        //console.log("data received in boatdetails"+data.Id);
        component.find("service").reloadRecord();
    },
   
    onRecordUpdated :function(component, event, helper){
        component.find("service").reloadRecord();   
    },
   
    onBoatReviewAdded : function(component, event, helper) {
        component.set('v.selectedTabId', 'boatreviewtab');
        var boatreviewcomponent = component.find("boatreviewcomponent");
        if(boatreviewcomponent){
            boatreviewcomponent.refresh();
        }
    }
})