
export default function fetchScoreFromCookie(user) {
    let value = 0;
    for (let cookie of document.cookie.split(';')) {
        cookie = cookie.trim();
        if (user === cookie.substring(0, user.length)) {
            value = cookie.substring(user.length + 1 , cookie.length);
        }
    }
    value = parseInt(value)
    value  = isNaN(value) ? 0 : value
    return value;
}