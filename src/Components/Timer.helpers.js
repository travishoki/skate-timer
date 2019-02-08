export const getTimerCountTimerText = (timerCount) => {
    const minutes = Math.floor(timerCount / 60);
    const seconds = timerCount - (minutes * 60);
    const formattedSeconds = (seconds >= 10) ? seconds : `0${seconds}`;
    const formattedMinutes = (minutes > 0) ? minutes : '';

    return `${formattedMinutes}:${formattedSeconds}`;
}
