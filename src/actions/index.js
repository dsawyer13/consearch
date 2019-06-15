const ticketMasterURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=p48FaIihgbRfceXm48vMgx9sScj9hrus&countryCode=US&classificationName=music&sort=date,asc'
// const iTunesURL = 'https://itunes.apple.com/search?'

export const FETCH_RESULTS = 'FETCH_RESULTS'
export const GET_AUDIO = 'GET_AUDIO'

export const fetchResults = results => ({
    type: FETCH_RESULTS,
    results
})

export const fetchResultsAsync = (city, distance) => dispatch => {
    fetch(`${ticketMasterURL}&city=${city}&distance=${distance}`) 
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json()
        })
        .then(results => dispatch(fetchResults(results)))
}
