// BACK COUNT
const backCount = parseInt(localStorage.getItem("backCount") || "0");

// MENU OPENS
const menuOpens = parseInt(localStorage.getItem("menuOpens") || "0");

// PAGE TIMES
const pageTimes = JSON.parse(localStorage.getItem("pageTimes") || "{}");

// find longest page
let longestPage = "none";
let longestTime = 0;

for (const page in pageTimes) {
    if (pageTimes[page] > longestTime) {
        longestTime = pageTimes[page];
        longestPage = page;
    }
}

// convert ms → seconds
longestTime = Math.round(longestTime / 1000);


// RENDER
document.getElementById("final-output").innerHTML = `
    <h1>Your Data</h1>

    <ul>
        <li><strong>Times you went back to the beginning:</strong> ${backCount}</li>
        <li><strong>Page you spent the longest on:</strong> ${longestPage} (${longestTime}s)</li>
        <li><strong>Times you opened the menu:</strong> ${menuOpens}</li>
    </ul>

    <p style="margin-top:2rem; opacity:0.6;">
        You weren’t navigating this website.<br>
        You were generating data.
    </p>
`;
