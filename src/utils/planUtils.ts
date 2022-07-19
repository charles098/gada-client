export const getPeriod = (startDay: Date, lastDay: Date): number => {
    const diffDate = startDay.getTime() - lastDay.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};
