console.log('Dashboard js loaded')





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

// const tableBody = document.getElementById("leadTable")
// const statusFilter = document.getElementById("statusFilter")

// function renderTable(filter = "all") {
//     tableBody.innerHTML = "";

//     const filteredLeads = leads.filter(lead => filter === "all" ? true : lead.status === filter);


//     document.getElementById("totalCalls").textContent = leads.length;
//     document.getElementById("answeredCalls").textContent = leads.filter(l => l.status === "answered").length;
//     document.getElementById("missedCalls").textContent = leads.filter(l => l.status === "missed").length;



//     filteredLeads.forEach(lead => {
//         const row = document.createElement('tr')

//         row.innerHTML = `
// <td>${lead.date}</td>
// <td>${lead.caller}</td>
// <td>${lead.page}</td>
// <td>${lead.status}</td>
// <td>${lead.duration}</td>
// `;

//         tableBody.appendChild(row)

//     });

// }
// statusFilter.addEventListener("change", (e) => {
//     renderTable(e.target.value);
// });

// renderTable();