const URLS = {
    SERVER: 'https://soloveo.com/',
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
];


funSelectedChannel = channel => {
    document.getElementById("view-sport").setAttribute('src', `${URLS.SERVER + channel}.php`);
}

channels.forEach(channel => {
    document.getElementById("list-channels").innerHTML += `
        <div class="col-md-2 mt-2 mb-4">
        <button type="button" class="btn btn-outline-dark " onclick="funSelectedChannel('${channel}')">
            <img class="view-icons" src="${URLS.ICON}/${channel}.png">
        </button>
        </div>`;
})

