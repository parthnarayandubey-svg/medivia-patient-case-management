// ==========================================
// MEDIVIA - Patient List JavaScript
// Course: CSE326 (HTML, CSS & JavaScript)
// ==========================================

// Function to display patients in the table
function displayPatients(filterText) {
    let tableBody = document.getElementById("patientTableBody");
    tableBody.innerHTML = "";

    // Get patients array from localStorage
    let patients = JSON.parse(localStorage.getItem("patients"));

    // If no patients exist
    if (!patients || patients.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5' class='no-data'>No patients registered yet.</td></tr>";
        return;
    }

    let matchCount = 0;

    // Use for loop to iterate over patients
    for (let i = 0; i < patients.length; i++) {
        let p = patients[i];

        // Check if search filter is provided
        if (filterText) {
            let patientName = p.name.toLowerCase();
            let query = filterText.toLowerCase();

            // If name doesn't match search query, skip this patient
            if (patientName.indexOf(query) === -1) {
                continue;
            }
        }

        matchCount++;

        // Create table row
        let row = document.createElement("tr");

        row.innerHTML = 
            "<td>" + p.id + "</td>" +
            "<td>" + p.name + "</td>" +
            "<td>" + p.age + "</td>" +
            "<td>" + p.phone + "</td>" +
            "<td>" +
                "<button class='btn btn-blue btn-small' onclick=\"viewCase('" + p.id + "')\">View Case</button>" +
                "<button class='btn btn-red btn-small' onclick=\"deletePatient('" + p.id + "')\">Delete</button>" +
            "</td>";

        tableBody.appendChild(row);
    }

    // If search yielded no results
    if (matchCount === 0) {
        tableBody.innerHTML = "<tr><td colspan='5' class='no-data'>No matching patients found.</td></tr>";
    }
}

// Function to search patient by name
function searchPatient() {
    let searchInput = document.getElementById("searchInput").value.trim();
    displayPatients(searchInput);
}

// Function to delete a patient
function deletePatient(id) {
    let confirmDelete = confirm("Are you sure you want to delete patient " + id + "?");
    if (confirmDelete) {
        let patients = JSON.parse(localStorage.getItem("patients"));
        if (!patients) return;

        // Find and remove patient using for loop
        for (let i = 0; i < patients.length; i++) {
            if (patients[i].id === id) {
                patients.splice(i, 1);
                break;
            }
        }

        // Save updated list
        localStorage.setItem("patients", JSON.stringify(patients));
        alert("Patient deleted successfully!");

        // Refresh table
        let searchInput = document.getElementById("searchInput").value.trim();
        displayPatients(searchInput);
    }
}

// Function to redirect to case taking page for selected patient
function viewCase(id) {
    localStorage.setItem("selectedPatientId", id);
    window.location.href = "case.html";
}

// Page load event
window.onload = function() {
    displayPatients();

    // Attach search button listener
    document.getElementById("searchBtn").addEventListener("click", searchPatient);

    // Attach show all button listener
    document.getElementById("showAllBtn").addEventListener("click", function() {
        document.getElementById("searchInput").value = "";
        displayPatients();
    });
};
