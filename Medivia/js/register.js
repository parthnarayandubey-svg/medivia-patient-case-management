// ==========================================
// MEDIVIA - Patient Registration JavaScript
// Course: CSE326 (HTML, CSS & JavaScript)
// ==========================================

// Function to generate new Patient ID automatically
function generatePatientId() {
    let patients = JSON.parse(localStorage.getItem("patients"));
    if (!patients) {
        patients = [];
    }
    // Calculate new ID like P101, P102...
    let count = patients.length + 1;
    let nextId = "P" + (100 + count);
    return nextId;
}

// When page loads, generate ID
window.onload = function() {
    document.getElementById("patientId").value = generatePatientId();
};

// Handle Form Submission
let form = document.getElementById("patientForm");
form.addEventListener("submit", function(event) {
    // Prevent default form submission reload
    event.preventDefault();

    // Get input values
    let id = document.getElementById("patientId").value;
    let name = document.getElementById("patientName").value.trim();
    let age = document.getElementById("patientAge").value.trim();
    let gender = document.getElementById("patientGender").value;
    let phone = document.getElementById("patientPhone").value.trim();
    let symptoms = document.getElementById("patientSymptoms").value.trim();

    // Basic Validation
    if (name === "" || age === "" || phone === "" || symptoms === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (phone.length < 10) {
        alert("Please enter a valid 10-digit phone number!");
        return;
    }

    // Create a new patient object
    let newPatient = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        phone: phone,
        symptoms: symptoms,
        diagnosis: "",
        medicine: "",
        remarks: ""
    };

    // Get existing patients list from localStorage
    let patients = JSON.parse(localStorage.getItem("patients"));
    if (!patients) {
        patients = [];
    }

    // Add new patient into array
    patients.push(newPatient);

    // Save updated array to localStorage
    localStorage.setItem("patients", JSON.stringify(patients));

    // Show success alert
    alert("Patient Registered Successfully! Patient ID: " + id);

    // Reset form and generate new ID for next patient
    form.reset();
    document.getElementById("patientId").value = generatePatientId();
});

// Handle Reset Button
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
    form.reset();
    document.getElementById("patientId").value = generatePatientId();
});
