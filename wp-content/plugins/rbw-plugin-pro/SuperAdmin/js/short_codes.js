jQuery( document ).ready( function($) {

    function search(inp) {

      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
    
          var  val = this.value;
           val=val.trim().toLowerCase();
           
        var list = document.getElementsByClassName("member");

        for (let item of list) {
            member_name=item.getElementsByClassName("member-name")[0].textContent.trim().toLowerCase();
            
            status_name=item.getElementsByClassName("rb-status-name")[0].textContent.trim().toLowerCase();
            team_name=item.getElementsByClassName("rb-team-name")[0].textContent.trim().toLowerCase();
            if(member_name.includes(val) || status_name.includes(val) || team_name.includes(val) ){
                    item.style.display="block";
                    item.style.position="relative";
            }else{
                item.style.display="none";
                // item.style.position="";
            }
        }
        
    });
    
    };

    search(document.getElementById('rbw_search_input'));
});
    

// jQuery( function($) {
//     console.log(autocomplete.liste)
//     var availableTags = autocomplete.liste;
//     jQuery( "#rbw_search_input" ).autocomplete({
//       source: availableTags,
     
//     minLength:2,
//     });
//   } );