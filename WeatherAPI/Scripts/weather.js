$(document).ready(function () {
    $("#select-weather").change(function () {
        var cityKey = $(this).val();
        console.log(cityKey);

        $.ajax({
            type: "get",
            url: "http://api.apixu.com/v1/current.json?key=3b23eb24513a46e29b0121229190702&q=" + cityKey,
            dataType: "json",
            success: function (result) {
                    $("#city").html(result.location.name);
                    $("#country").html(result.location.country);
                    $("#celsius").html(result.current.temp_c + " " + "C");
                    $("#farade").html(result.current.temp_f + " " + "F");
                    $("#timeNow").html(result.location.localtime);
                    $("#windSpeed").html(result.current.wind_mph + " " + "Mph");
                    $("#humidity").html(result.current.humidity);
                    $("#weather-information").html(table);
            }
        });

    });
});