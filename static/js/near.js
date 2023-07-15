(function () {
    const dateapp = document.getElementById("datesn");
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    const now = new Date();
    const notableDates = toDates(dates).filter((x) => x.birth > now);
    const near = nearest(4, notableDates);

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = near[0].birth;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end
    document.getElementById("nextnota").innerText = near[0].name;
    document.getElementById("follow-next").innerText =
        "\n" + followedby(near.slice(1));

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(
                distance / day
            )),
                (document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                ));

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById(
                    "headline"
                ).innerText = `Сегодня день когда родился ${near[0].name}!`;
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0);
})();

function toDates(data) {
    return data.map((x) => {
        let bd = x.birth?.toString().split(".");
        const now = new Date();
        if (!bd) {
            bd = ["1", "0"];
        }
        return {
            name: x.name,
            birth: new Date(
                now.getFullYear(),
                parseInt(bd[1]) - 1,
                parseInt(bd[0])
            ),
            death: new Date(x.death),
        };
    });
}
function nearest(n, dates) {
    return dates
        .sort((a, b) => a.birth.getTime() - b.birth.getTime())
        .slice(0, n);
}

function followedby(data) {
    return data
        .map(
            (x) =>
                `${x.name} | ${x.birth.toLocaleDateString()} | явление миру\n`
        )
        .join("\n");
}
