


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


/* fetch request from the font-end option. */
// async function fetchLeads() {
//     try {
//         const response = await fetch("/api/leads");
//         const data = await response.json();
//         console.log("Fetched leads:", data);
//         return data;
//     } catch (error) {
//         console.error("Error fetching leads:", error);
//         return [];
//     }
// }


// fetchLeads();