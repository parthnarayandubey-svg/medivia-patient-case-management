// ==========================================
// MEDIVIA - Case Taking JavaScript
// Course: CSE326 (HTML, CSS & JavaScript)
// ==========================================

// Function to load patients into the dropdown
function loadPatientDropdown() {
    let select = document.getElementById("selectPatient");
    select.innerHTML = "<option value=''>-- Choose a Patient --</option>";

    let patients = JSON.parse(localStorage.getItem("patients"));
    if (!patients || patients.length === 0) {
        return;
    }

    // Add patients to select dropdown
    for (let i = 0; i < patients.length; i++) {
        let option = document.createElement("option");
        option.value = patients[i].id;
        option.textContent = patients[i].id + " - " + patients[i].name;
        select.appendChild(option);
    }
}

// Function to display patient case details
function displayPatientCase(id) {
    let detailsBox = document.getElementById("patientDetailsBox");

    if (!id) {
        detailsBox.style.display = "none";
        document.getElementById("caseSymptoms").value = "";
        document.getElementById("caseDiagnosis").value = "";
        document.getElementById("caseMedicine").value = "";
        document.getElementById("caseRemarks").value = "";
        return;
    }

    let patients = JSON.parse(localStorage.getItem("patients"));
    if (!patients) return;

    let selectedPatient = null;
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].id === id) {
            selectedPatient = patients[i];
            break;
        }
    }

    if (selectedPatient) {
        // Show details box
        detailsBox.style.display = "block";
        document.getElementById("dispId").textContent = selectedPatient.id;
        document.getElementById("dispName").textContent = selectedPatient.name;
        document.getElementById("dispAge").textContent = selectedPatient.age + " (" + selectedPatient.gender + ")";
        document.getElementById("dispPhone").textContent = selectedPatient.phone;

        // Fill form fields
        document.getElementById("caseSymptoms").value = selectedPatient.symptoms || "";
        document.getElementById("caseDiagnosis").value = selectedPatient.diagnosis || "";
        document.getElementById("caseMedicine").value = selectedPatient.medicine || "";
        document.getElementById("caseRemarks").value = selectedPatient.remarks || "";
    }
}

// Function to save case details
function saveCase() {
    let select = document.getElementById("selectPatient");
    let patientId = select.value;

    if (!patientId) {
        alert("Please select a patient first!");
        return;
    }

    let symptoms = document.getElementById("caseSymptoms").value.trim();
    let diagnosis = document.getElementById("caseDiagnosis").value.trim();
    let medicine = document.getElementById("caseMedicine").value.trim();
    let remarks = document.getElementById("caseRemarks").value.trim();

    let patients = JSON.parse(localStorage.getItem("patients"));
    if (!patients) return;

    let isSaved = false;
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].id === patientId) {
            patients[i].symptoms = symptoms;
            patients[i].diagnosis = diagnosis;
            patients[i].medicine = medicine;
            patients[i].remarks = remarks;
            isSaved = true;
            break;
        }
    }

    if (isSaved) {
        localStorage.setItem("patients", JSON.stringify(patients));
        alert("Case details saved successfully for Patient: " + patientId);
    }
}

// Page load event
window.onload = function() {
    loadPatientDropdown();

    // Check if a patient was pre-selected from Patient List page
    let selectedId = localStorage.getItem("selectedPatientId");
    if (selectedId) {
        let select = document.getElementById("selectPatient");
        select.value = selectedId;
        displayPatientCase(selectedId);
        // Clear selected ID so next time user starts fresh or selects manually
        localStorage.removeItem("selectedPatientId");
    }

    // Dropdown change event
    document.getElementById("selectPatient").addEventListener("change", function() {
        displayPatientCase(this.value);
    });

    // Save button event
    document.getElementById("saveCaseBtn").addEventListener("click", saveCase);
};
