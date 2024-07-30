const formatISODate = (isoDate) => {
    const date = new Date(isoDate);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        // timeZoneName: 'short',
    };

    return date.toLocaleDateString('uk-UA', options);
};

export default formatISODate;
