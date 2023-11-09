var convertBtn = document.querySelector('.search-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    window.location.href = `https://lime-easy-dhole.cyclic.app/youtube/download?URL=${URL}`;
}