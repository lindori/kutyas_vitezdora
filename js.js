$(function () {

    tablazatbaKiir();


    $("article div:nth-child(2)").on("click", "th", rendez);

}
);

var tomb = [
    {
        Fajta: "Kuvasz",
        Kor: 12,
        Szín: "Fehér"
    },
    {
        Fajta: "Shiba Inu",
        Kor: 6,
        Szín: "Aranybarna"
    },
    {
        Fajta: "Mopsz",
        Kor: 10,
        Szín: "Zsemle"
    },
    {
        Fajta: "Spániel",
        Kor: 2,
        Szín: "Foltos"
    }
];
var irany = true;
function kiemel(){
    $(this).toggleClass("kiemel");
}
function tablazatbaKiir() {
    //írjuk ki a Néveket egy táblázatba 

    $("article div:nth-child(2)").empty();
    $("article div:nth-child(2)").append("<table>");
    $("article div:nth-child(2) table").append("<tr></tr>");
    for (var item in tomb[0]) {
        $("article div:nth-child(2) table tr").append("<th id='" + item + "'>" + item + " </th>");

    }
    for (var i = 0; i < tomb.length; i++) {
        $("article div:nth-child(2) table").append("<tr>");
        for (var item in tomb[i]) {
            $("article div:nth-child(2) table tr").eq(i + 1).append("<td>" + tomb[i][item] + " </td>");

        }
        ;
    }
$('#submit').click(function()
        {
          var fajtavar = $('#fajta').val();
          var korvar = $('#kor').val();
          var szinvar = $('#szin').val();

              $('article div:nth-child(2) table').append('<tr><td>'+fajtavar+'</td><td>'+korvar+'</td><td>'+szinvar+'</td></tr>');

        });
$("article div:nth-child(2) th").hover( kiemel);
}

function rendez() {
    var mezo = $(this).attr("id");

    if (mezo === "Kor") {
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return a[mezo] - b[mezo];
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return b[mezo] - a[mezo];
                    }
            );

        }

    } else {
        if (irany) {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] > b[mezo]) - 0.5;
                    }
            );
        } else {
            tomb.sort(
                    function (a, b) {
                        return Number(a[mezo] < b[mezo]) - 0.5;
                    }
            );
        }

    }
    irany = !irany;
    console.log("aktuális objektum " + JSON.stringify(tomb));
    tablazatbaKiir();
}

        
