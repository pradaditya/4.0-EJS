import express from "express";

const app = express();
const port = 3000;

function getDayName(dayIndex) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[dayIndex];
}

app.get("/", (req, res) => {
    const today = new Date("September 29, 2024 23:15:30");
    const day = today.getDay();
    const dayName = getDayName(day);

    let dayType, advice;
    if (day >= 1 && day <= 5) {
        dayType = "weekday";
        advice = "it's time to work hard!";
    } else {
        dayType = "weekend";
        advice = "it's time to holiday!";
    }

    res.render("index.ejs", {
        dayName: dayName,
        dayType: dayType,
        advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
