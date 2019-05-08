
    //KIA Dealer Lookup
    function getDealer() {
        window.open("_blank").location.href = "https://gds.kiatechinfo.com:447/eReport/diaglist.aspx?uid=GDS&cpcode=B28VA" + document.getElementById("dealer").value + "&device=GDSM";
        return false;
    }

    //KIA VIN Lookup
    function getVin() {
        window.open("_blank").location.href = "https://gds.kiatechinfo.com:447/eReport/diaglist.aspx?uid=GDS&cpcode=B28VA&vin=" + document.getElementById("vin").value + "&device=GDSM";
        return false;
    }