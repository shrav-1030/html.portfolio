document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("exam-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addExam();
        }
    });
});

function addExam() {
    const examInput = document.getElementById("exam-input");
    const examList = document.getElementById("exam-list");
    
    if (examInput.value.trim() !== "") {
        const newExam = document.createElement("li");
        newExam.textContent = examInput.value;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            examList.removeChild(newExam);
        };
        
        newExam.appendChild(deleteBtn);
        examList.appendChild(newExam);
        examInput.value = "";
    }
}

