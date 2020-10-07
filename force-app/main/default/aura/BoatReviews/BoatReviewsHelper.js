({
    onInit : function(component, event, helper) {
        var boatId=component.get("v.boat").Id;
       // console.log("Boatid received in BoatReviewsHelper :"+boatId);
        var action=component.get("c.getAll");
        action.setParams({"boatId":boatId});
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){ 
                var temp=response.getReturnValue();
                component.set("v.boatReviews",temp);
               
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);        
    }
})