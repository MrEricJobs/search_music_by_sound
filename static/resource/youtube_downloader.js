var convertBtn = document.querySelector('.search-button');
var URLinput = document.querySelector('.URL-input');
var formatInput = document.querySelector('.format-select');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value, formatInput.value);
});
function sendURL(URL, format) {
    window.location.href = `/youtube/youtube_downloader/download?URL=${URL}&&format=${format}`;
}