
/**Open your console then
Click on the select menu . Look in the
console to see the selected value */

const filterInput = document.getElementById("statusFilter");

filterInput.addEventListener("change", (e) => {
    const selected = e.target.value;

    console.log("Selected filter:", selected);
}
)



document.addEventListener("DOMContentLoaded", () => {

    const leads = [
        {
            date: "2026-02-18",
            caller: "555-210-8844",
            page: "/towing/uptown",
            status: "answered",
            duration: "4m 12s"
        },
        {
            date: "2026-02-18",
            caller: "555-998-4421",
            page: "/towing/downtown",
            status: "missed",
            duration: "4m 12s"
        },
        {
            date: "2026-02-19",
            caller: "555-210-8844",
            page: "/towing/airport",
            status: "answered",
            duration: "4m 12s"
        }
    ]

    const table = document.getElementById("leadTable");

    leads.forEach(lead => {
        const row = document.createElement("tr");

        row.innerHTML = `
<td>${lead.date}</td>
<td>${lead.caller}</td>
<td>${lead.page}</td>
<td>${lead.status}</td>
<td>${lead.duration}</td>
`
            ;
        table.appendChild(row)

    })


})


/* fetch request testing with leads.json for quick testing.
Just open the console for an array of objects */

async function fetchLeads() {
    try {
        const response = await fetch("leads.json");
        const data = await response.json();
        console.log("Fetched leads:", data);
        return data;
    } catch (error) {
        console.error("Error fetching leads:", error);
        return [];
    }
}


fetchLeads();