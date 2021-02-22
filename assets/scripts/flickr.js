fetch("https://www.flickr.com/services/feeds/photos_public.gne")
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
        } else {
            console.log("NOT SUCCESSFUL")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"));