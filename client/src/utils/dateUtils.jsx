export const dateUtils = {
    formatDate: (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(date));
    },
    parseDate: (dateString) => {
        return new Date(dateString);
    }
};
