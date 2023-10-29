export function checkResponseLogin(responseStatus) {
    if (responseStatus == 302) {
        window.location.href = '/cha-movies/login/'
    }
}
