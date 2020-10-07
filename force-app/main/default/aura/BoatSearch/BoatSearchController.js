({
    onFormSubmit : function(component, event, helper) {
        var boatTypeId = event.getParam('boatTypeId');
        //console.log('selected boat Type'+boatTypeId);

        var boatSearchComponents = component.find('boatSearchResult');
        var resultBoat = boatSearchComponents.search(boatTypeId);
       
    }
})