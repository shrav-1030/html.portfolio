document.addEventListener("DOMContentLoaded", () => {
    updateDashboard();
});

function updateDashboard() {
    // Fetch total exams (dummy data for now)
    document.getElementById("total-exams").textContent = getTotalExams();
    
    // Fetch total students (dummy data for now)
    document.getElementById("total-students").textContent = getTotalStudents();
    
    // Fetch recent results (dummy data for now)
    updateRecentResults();
}

function getTotalExams() {
    return 5; // Placeholder value, replace with real data fetching
}

function getTotalStudents() {
    return 50; // Placeholder value, replace with real data fetching
}

function updateRecentResults() {
    const resultsList = document.getElementById("recent-results");
    resultsList.innerHTML = ""; // Clear existing list
    
    const dummyResults = [
        { name: "Alice", score: 85 },
        { name: "Bob", score: 90 },
        { name: "Charlie", score: 78 }
    ];
    
    dummyResults.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = `${result.name}: ${result.score}%`;
        resultsList.appendChild(listItem);
    });
}