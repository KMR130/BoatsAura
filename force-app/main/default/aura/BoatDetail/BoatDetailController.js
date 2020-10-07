({
    init : function(component, event, helper) {
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if (redirectEvent) {
            component.set("v.showFullDetailsBtn", true);
        }
    },

    onFullDetails : function(component, event, helper) {
        var boat = component.get("v.boat");
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if (redirectEvent && boat) {
            redirectEvent.setParams({
                "recordId": boat.Id
            });
            redirectEvent.fire();
        }
    }
})