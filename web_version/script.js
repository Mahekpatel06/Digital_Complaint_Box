function showAdd() {
    document.getElementById("addSection").classList.remove("hidden");
    document.getElementById("viewSection").classList.add("hidden");

    document.getElementById("addTab").classList.add("active");
    document.getElementById("viewTab").classList.remove("active");
}

function showView() {
    document.getElementById("addSection").classList.add("hidden");
    document.getElementById("viewSection").classList.remove("hidden");

    document.getElementById("addTab").classList.remove("active");
    document.getElementById("viewTab").classList.add("active");

    displayComplaints();
}

function addComplaint() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let desc = document.getElementById("desc").value;

    if (name === "" || desc === "") {
        alert("Please fill all fields!");
        return;
    }

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push({
        name: name,
        category: category,
        desc: desc
    });

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint Submitted Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
}

function displayComplaints() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let view = document.getElementById("viewSection");

    view.innerHTML = "";

    if (complaints.length === 0) {
        view.innerHTML = "<p>No complaints found.</p>";
        return;
    }

    complaints.forEach((c, index) => {
        view.innerHTML += `
            <div class="complaint-card">
                <h3>Complaint #${index + 1}</h3>
                <p><b>Name:</b> ${c.name}</p>
                <p><b>Category:</b> ${c.category}</p>
                <p>${c.desc}</p>
            </div>
        `;
    });
}
