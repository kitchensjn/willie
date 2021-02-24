function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=26424453@N08&tags=" + document.getElementById("search").value;
    document.querySelector('head').appendChild(script);
}

function jsonFlickrFeed(data) {
    var image = "";
    data.items.forEach(function (element) {
        image += "<img src=\"" + element.media.m + "\"/>";
    });
    document.getElementById("outputDiv").innerHTML = image;
}



/*
var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&id=26424453@N08";

function getPhotos() {
    $.getJSON(flickerAPI, {
        tags: $("#search").val(),
        tagmode: "any",
        format: "json"
    }).done(function (result, status, xhr) {
        $.each(result.items, function (i, item) {
            $("<img>").attr("src", item.media.m).appendTo("#outputDiv");
        });
    }).fail(function (xhr, status, error) {
        alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    });
}

getPhotos();

$('#submit').click(function() {
    getPhotos();
});
*/