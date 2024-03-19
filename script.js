function calculInterest(){
    var placementInitial = document.getElementById("placement").value;
    var nbrAnnee = document.getElementById("annees").value;
    var tauxInteret = document.getElementById("interets").value;
    var calculInteret = document.getElementById("calcInteret").value;
    var versement = document.getElementById("versement").value;
    var frequence = document.getElementById("frequence").value;
    var periode = document.getElementById("periode").value;

    /*
    console.log("placement: " + placementInitial);
    console.log("nbrAnnee: " + nbrAnnee);
    console.log("tauxInteret: " + tauxInteret);
    console.log("calculInteret: " + calculInteret);
    console.log("versement: " + versement);
    console.log("frequence: " + frequence);
    console.log("periode: " + periode);
    */
    
    var totalInterets = 0;
    var totalInvested = 0;
    var totalGains = 0;

    var totalInterets = placementInitial;

    for(let i = 0; i < nbrAnnee; i++){
        if(placementInitial != ""){
            totalInterets = parseFloat(totalInterets) + parseFloat((totalInterets * (tauxInteret/100)));
        }
        if(versement != ""){
            totalInterets += (versement * 12) * (tauxInteret/100);
        }
    }
    
    totalInvested = Math.round((totalInterets + Number.EPSILON) * 100) / 100;
    totalGains = Math.round((totalInterets - placementInitial + Number.EPSILON) * 100) / 100;

    document.getElementById("nbrannee").innerHTML = nbrAnnee;
    document.getElementById("totalInvestment").innerHTML = totalInvested + " CHF";
    document.getElementById("totalGains").innerHTML = "+" + totalGains + " CHF";
}