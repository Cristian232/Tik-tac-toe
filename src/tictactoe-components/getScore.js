
export default function getScore(user) {
    let value = 0;
    for (let cookie of document.cookie.split(';')) {
        cookie = cookie.trim();
        if (user === cookie.substring(0, user.length)) {
            value = cookie.substring(user.length + 2 , cookie.length);
        }
    }
    return value;
}