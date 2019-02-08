export const getNamesFromUrl = () => {
    const url = window.location.href;

    const regex = /http:\/\/localhost:3000\/(.*)/;
    let urlNames = url.match(regex)[1];

    if (urlNames === '') {
        return 'Milo/Hoki';
    }

    return urlNames;
};

export const getSkaterNames = () => getNamesFromUrl()
    .split('/')
    .map((urlPart, index) => ({
        id: (index + 1),
        name: urlPart
    }));
