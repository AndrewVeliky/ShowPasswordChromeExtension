document.addEventListener("DOMContentLoaded", ()=>{

    let input = document.getElementById("show-always");
    let button = document.getElementById("showPass");
    /*chrome.storage.sync.get(status, function (obj) {
        input.checked = obj.status;
        if(input.checked === true){
            console.log("something");
            chrome.tabs.executeScript({
                code: '(' + showPass + ')();' 
            }, (results) => {  
                console.log(results[0]);
            });
        }
    });*/
    
    button.addEventListener("click", ()=>{
        button.innerText = button.innerText === "Show" ? "Hide" : "Show";

        function showPass() {
            let passwordFields = document.querySelectorAll("input[name='password']") || document.querySelectorAll("input[type='password']");
                if(passwordFields.length === 0) {
                    console.log("no passwords to show");
                    return;
                }

                passwordFields.forEach(element => {
                    element.type = element.type === "password" ? "text" : "password";
                });
        };

        chrome.tabs.executeScript({
            code: '(' + showPass + ')();' 
        }, (results) => {  
            console.log(results[0]);
        });
    });

    /*input.addEventListener("change", ()=>{
        chrome.storage.sync.set({status: input.checked}, function() {
            console.log('Value is set to ' + input.checked);
          });
    }); */
    
});
