const URLS = {
    SERVER: 'https://soloveo.com/',
    ICON: './icons/'
}

const channels = [
    {
        name: 'Win Sport +',
        path: 'winmas',
    },
    {
        name: 'Directv Sport',
        path: 'directvsports',
    },
    {
        name: 'Fox Sport HD',
        path: 'foxsportshd',
    },
    {
        name: 'Fox Sport 2',
        path: 'foxsports2',
    }
];


funSelectedChannel = channel => {
   document.getElementById("view-sport").setAttribute('src', `${URLS.SERVER + channel}.php`);
}

channels.forEach(items => {
    document.getElementById("list-channels").innerHTML += `
        <div class="col-md-3 mt-2">
        <button type="button" class="btn btn-outline-dark " onclick="funSelectedChannel('${items.path}')">
            <img class="view-icons" src="${URLS.ICON}/${items.path}.png">
        </button>
        </div>`;
})

