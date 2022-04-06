
function initElement()
{
  var p = document.getElementById("boutonclic");
  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  p.onclick = showAlert;
};

function showAlert()
{   
    var e = document.getElementById("textarea").value;
    if (e == "1945") {alert("Congratulations");} else { alert("Try Again !")}
    
}
