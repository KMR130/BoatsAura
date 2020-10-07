({
    LoadBoatTypes : function(component,event) {
        var action=component.get("c.getBoatTypes");
       
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){
                component.set("v.BoatTypes",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
       
    },
   
   
})