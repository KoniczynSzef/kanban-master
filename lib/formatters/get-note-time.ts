export function getNoteTime(timeInMS: number) {
    const time = new Date(timeInMS);

    const today = new Date();

    // prettier-ignore
    let difference = Math.floor((today.getTime() - time.getTime()) / (1000 * 60)); // * This will give the difference in minutes

    if (difference === 0 || difference === 1) {
        return "Just now";
    }

    if (difference < 5) {
        return `${difference} minutes ago`;
    }

    if (difference < 30) {
        return `Few minutes ago`;
    }

    if (difference < 60) {
        return `Less than an hour ago`;
    }

    difference = Math.floor(difference / 60); // * This will give the difference in hours

    if (difference === 1) {
        return `1 hour ago`;
    }

    if (difference < 6) {
        return `${difference} hours ago`;
    }

    if (difference < 12) {
        return `Few hours ago`;
    }

    if (difference < 24) {
        return `Less than a day ago`;
    }

    difference = Math.floor(difference / 24); // * This will give the difference in days

    if (difference === 1) {
        return `1 day ago`;
    }

    if (difference < 5) {
        return `${difference} days ago`;
    }

    if (difference < 30) {
        return `Few days ago`;
    }

    difference = Math.floor(difference / 30); // * This will give the difference in months

    if (difference === 1) {
        return `1 month ago`;
    }

    if (difference < 5) {
        return `${difference} months ago`;
    }

    if (difference < 12) {
        return `Few months ago`;
    }

    difference = Math.floor(difference / 12); // * This will give the difference in years

    if (difference === 1) {
        return `1 year ago`;
    }

    return `${difference} years ago`;
}
