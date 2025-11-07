
export const getTrackColour = (track) => {

    switch (track.toLowerCase()) {
        case 'frontend':
            return 'bg-blue-100';
        case 'backend':
            return 'bg-green-100';
        case 'devops':
            return 'bg-yellow-100';
        case 'ai':
            return 'bg-purple-100';
        default:
            return 'bg-gray-100';
    }
}