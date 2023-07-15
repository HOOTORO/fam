const dd = dates;
const app = document.getElementById("datesn");

// app.appendChild(node);

// draw(dd);

function draw(arr) {
    for (const d of arr) {
        const par = document.createElement("p");
        par.innerHTML = d;
        app.appendChild(par);
    }
}
const tempstr = `<strong>$1</strong> <br> <em>Birth</em>: $2<br>$3`;
const raw = dd.map((x) => {
    if (x.death) {
        return tempstr
            .replace("$1", x.name)
            .replace("$2", x.birth)
            .replace("$3", `Death: ${x.death}`);
    } else {
        return tempstr
            .replace("$1", x.name)
            .replace("$2", x.birth)
            .replace("$3", ``);
    }
});

draw(raw);
