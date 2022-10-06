const CLIENT_ID = '6ecf7f42beba46b285d31a8fb7918655';
// for production uri
const REDIRECT_URI = 'http://jammming-farulivan.surge.sh/';
// for development uri
// const REDIRECT_URI = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken
        }

        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            // This clears the parameters, allowing us to grab a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessUrl
        }
    },
    
    async search(term) {
        const accessToken = Spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        }
        return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        }));
    },

    savePlaylist(name, trackURIs) {
        if(!name || !trackURIs.length) {
            return
        }

        const accessToken = Spotify.getAccessToken()
        const headers = { Authorization: `Bearer ${accessToken}` }
        let userID

        return fetch(`https://api.spotify.com/v1/me`, { headers: headers})
            .then(response => response.json())
            .then(jsonResponse => {
                userID = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,{
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: name })
                })
                .then(response => response.json())
                .then(jsonResponse => {
                    const playlistID = jsonResponse.id
                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackURIs })
                    })
                })
            })
    }
}

export default Spotify