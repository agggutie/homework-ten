function initListeners() { 
        $("nav .navRight a ").click(function (e){
            let btnId = e.currentTarget.id;
            MODEL.changePageContent(btnId);
        });
}

function initTourListeners() { 
    $(".site-container .toursSec .imageRow .textHolder .text button a").click(function (e){
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    });
}



// Code runs when HTML is ready 
$(document).ready(function () {
    initListeners();
    initTourListeners(); 
    MODEL.changePageContent("home");
});

