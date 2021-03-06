let trackBox = document.getElementById("trackBox")
let artistBox = document.getElementById("artistBox")
let searchButton = document.getElementById("searchButton")
let trackInfo = document.getElementById("trackInfo")
let trackDiv = document.getElementById("trackDiv")
// f86b06c5332c847e2a02380f28826dc2  <--- This is the API key for last.fm


searchButton.addEventListener("click", function () {
    let trackName = trackBox.value
    let artistName = artistBox.value

    fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=f86b06c5332c847e2a02380f28826dc2&artist=${artistName}&track=${trackName}&format=json`)
        .then(r => r.json())
        .then(trackAbout => {
            console.log(trackAbout)
            let head = `<h2>${trackAbout.track.name}</h2>
                        <h1>Album: ${trackAbout.track.album.title}</h1>`
            trackDiv.innerHTML = head

        })


    fetch(`https://api.lyrics.ovh/v1/${artistName}/${trackName}`)
        .then(response => response.json())
        .then(song => {
            let item = `<p>${song.lyrics}</p>`
            trackInfo.innerHTML = item
        })

    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=f86b06c5332c847e2a02380f28826dc2&format=json`)
        .then(results => results.json())
        .then(artistInfo => {
            console.log(artistInfo)

        })




})