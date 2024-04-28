export function getColSpan(index: number) {
    if (index % 4 === 1 || index % 4 === 2) {
        return "lg:col-span-7";
    }

    return "lg:col-span-5";
}
