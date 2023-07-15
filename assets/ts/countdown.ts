type RawNotable = { name: string; birth?: string; death?: string };
type Notable = { name: string; birth?: Date; loc?: string; death?: Date };

const dateapp = document.getElementById("datesn");
const raw = dates as RawNotable[];

function toDates(data: RawNotable[]) {
    return data.map((x) => {
        const bd = x.birth?.split(".");
        const now = new Date();
        console.log(now);

        return {
            name: x.name,
            birth: new Date(now., bd[1], bd[0]),
            death: new Date(x.death as string),
        };
    });
}

function nearest(n?: number) {
    const notableDates = toDates(raw);

    notableDates.sort((a, b) => a.birth.getTime() - b.birth.getTime());

    return notableDates.slice(n);
}

export { dateapp };
