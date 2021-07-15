const URLS = {
    /* SERVER: 'https://soloveo.com/', */
    /* SERVER: 'https://dpelota.com/' */
    SERVER: 'https://pelotero.net/',
    ICON: './icons/'
}

const channels = [
    'winsports',
    'winmas',
    'directvsports',
    'directvsports2',
    'directvplushd',
    'foxsportshd',
    'foxsports2',
    'foxsportspremium',
    'espnhd',
    'espn2hd',
    'tntsports',
    'udn'
];


funSelectedChannel = channel => {
    document.getElementById("view-sport").setAttribute('src', `${URLS.SERVER + channel}.php`);
}

channels.forEach(channel => {
    document.getElementById("list-channels").innerHTML += `
        <div class="col-md-2 col-sm-3 col-6  mt-2">
        <button type="button" class="btn btn-outline-dark " onclick="funSelectedChannel('${channel}')">
            <img class="view-icons" src="${URLS.ICON}/${channel}.png">
        </button>
        </div>`;
})



