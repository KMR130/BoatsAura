({
    onInit: function(component) {
        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (entityAPIName)
            null,            // recordTypeId
            false,           // skip cache?
            $A.getCallback( function() {
                var rec=component.get("v.simpleboatReview");
                var error=component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else { 
                    component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                   // console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    } 
})