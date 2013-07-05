var serviceURL = "http://dynastar-chrome.xsalto.com/Chrome/";

var valeurNote;

$(document).bind('pageinit', function(event) {
	getPisteList('smith');
});


function getPisteList(userId) {
	$.getJSON("/Chrome/smith.json",{label: "smith" })
	.done(function(data) {
		$('#liste_pistes li').remove();
		valeurNote = '3.5';
		$.each(data, function(index, piste) {
		var divStar = "star" + index;
		$('#liste_pistes').append('<li><div class="piste"><div class="photo"><img src="http://dynastar-chrome.xsalto.com/Chrome/images/tree_mini.png"  alt="Piste"></div>' +
					'<div class="texte"><h2><a href="detailPiste.html?piste.idPiste=' + piste.id + '">' + piste.label + 
					'<div class="couleur rouge img-circle"></div></h2></div>' +
					'<div class="note_globale">' + 
					'<span>Note </span> <strong>' + valeurNote + '</strong></div>' + 
					'<div id="' + divStar  + '" data-score="' + valeurNote + '" disabled="disabled">' +
					'</div></div>');
			$("#" + divStar ).raty({
				readOnly  : true,
				width: false,
				path : "/Chrome/images/",
				score: function() {
				return $(this).attr('data-score');
				}
				});
			});
		$('#liste_pistes').listview('refresh');
	})
	.fail(function( jqxhr, textStatus, error ) {
var err = textStatus + ', ' + error;
console.log( "Request Failed: " + err);
});
}
