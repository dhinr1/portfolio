const courseData = [
    { course: "Health-promoting nutrition workshop", from_weeks_pregnant: 10},
    { course: "Pregnancy sport", from_weeks_pregnant: 16 },
    { course: "Babywearing workshop", from_weeks_pregnant: 22},
    { course: "Pelvic floor course", from_weeks_pregnant: 24 },
    { course: "Birth preparation course", from_weeks_pregnant: 28 },
    { course: "Breastfeeding preparation course", from_weeks_pregnant: 32 },
    { course: "Baby care course", from_weeks_pregnant: 32 },
    { course: "First-aid course", from_weeks_pregnant: 34 },
];

const day = 0;
const month = 0;
const year = 0;

function getUserDate(dateDay, dateMonth, dateYear) {
    return [dateDay, dateMonth, dateYear];
};

const getPersonalDates = (dueDate, courseData) => {
    const personalizedDates = [];
    const firstDayOfLastMenstruation = new Date(dueDate);
    firstDayOfLastMenstruation.setDate(dueDate.getDate() - 280);
    courseData.forEach((course) => {
        const courseDateInDays = (course.from_weeks_pregnant * 7);
        const dateOfCourse = new Date(firstDayOfLastMenstruation);
        dateOfCourse.setDate(firstDayOfLastMenstruation.getDate() + courseDateInDays);
        const formattedDate = dateOfCourse.toLocaleDateString('en-GB');
        personalizedDates.push({course: course.course, personalizedDate: formattedDate});
    });
    return personalizedDates
};

document.addEventListener("DOMContentLoaded", function () {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
    const submitButton = document.querySelector(".card-button");

    // Populate Day dropdown (1-31)
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    };

    // Populate Month dropdown with names
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    months.forEach((month, index) => {
        let option = document.createElement("option");
        option.value = index + 1; // Months are 1-based
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Populate Year dropdown (current year - 1 to current year + 1)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 1; i <= currentYear + 1; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    };

    document.getElementById("due-date-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("course-plan").innerHTML = '';
        const dueDateArray = getUserDate(daySelect.value, monthSelect.value, yearSelect.value);
        const dueDate = new Date(dueDateArray[2], dueDateArray[1] -1, dueDateArray[0]);
        const userPersonalizedDates = getPersonalDates(dueDate, courseData);
        const allCoursesDiv = document.createElement("div");
        allCoursesDiv.classList.add("all-courses");

        const headerRow = document.createElement("div");
        headerRow.classList.add("header-row");

        const courseNameHeader = document.createElement("p");
        courseNameHeader.textContent = "Course name:";
        courseNameHeader.classList.add("column-tag")
        headerRow.appendChild(courseNameHeader);

        const courseDateHeader = document.createElement("p");
        courseDateHeader.textContent = "From:";
        courseDateHeader.classList.add("column-tag")
        headerRow.appendChild(courseDateHeader);

        allCoursesDiv.appendChild(headerRow)

        userPersonalizedDates.forEach((item) => {
            const paragraph = document.createElement("p");

            // Course name
            const courseNameSpan = document.createElement("span");
            courseNameSpan.textContent = item.course;
            
            //Course date
            const courseDateSpan = document.createElement("span");
            courseDateSpan.textContent = item.personalizedDate

            paragraph.appendChild(courseNameSpan);
            paragraph.appendChild(courseDateSpan);
            allCoursesDiv.appendChild(paragraph);
        });

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as pdf";
        downloadButton.classList.add("download-button")
        allCoursesDiv.appendChild(downloadButton)

        // Functionality for "download as pdf" button
        downloadButton.addEventListener("click", function () {

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            const logo = "data:image/png;base64,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" 
            doc.addImage(logo, 'PNG', 18, 10, 30, 22);

            doc.setFont("helvetica")


            // Set title
            doc.setFontSize(20);
            doc.setTextColor(170, 209, 209);
            doc.text("Personalized Course Plan".toUpperCase(), 83, 31);

            doc.setDrawColor(170, 209, 209); // Set the color for the line (optional, you can use any color)
            doc.setLineWidth(0.7); // Set the line width (optional, adjust as needed)
            doc.line(20, 34, 190, 34);

            // Set fontsize for content
            doc.setFontSize(12);
            doc.setTextColor(56, 53, 54);
            doc.setFont("helvetica", "bold");

            let yPosition = 50;

            // Set Headers
            doc.text("Course name:", 20, yPosition);
            doc.text("Date:", 180, yPosition);

            // Adjust yPosition after printing the headers
            yPosition += 15; // Add extra space between header and data

            doc.setFont("helvetica", "normal");

            userPersonalizedDates.forEach((item) => {
                // Print course name and date for each item
                doc.text(item.course, 20, yPosition);
                doc.text(item.personalizedDate, 169, yPosition);
                yPosition += 10;
            });

            doc.setDrawColor(170, 209, 209); 
            doc.setLineWidth(0.7); 
            let footerY = 270; 
            doc.line(20, footerY, 190, footerY);
            
            doc.save("course_plan.pdf");
        });

        const coursePlanDiv = document.getElementById("course-plan");
        coursePlanDiv.appendChild(allCoursesDiv);
        coursePlanDiv.style.marginTop = "20px";

        document.getElementById("course-plan").classList.add("visible");

        setTimeout(function() {
            coursePlanDiv.style.height = "auto";  // Allow height to expand
            coursePlanDiv.style.opacity = "1";  // Make it visible
            coursePlanDiv.style.visibility = "visible";  // Set visibility to visible
        }, 0); // Run immediately after the content is added
    });
});


