// بيانات الطلاب المخزنة داخل JavaScript

const students = {

    "12345": {

        name: "عبده رجب نصار",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "Marine Safety",

        issue_date: "2024-01-01",

        expiry_date: "2026-01-01",

        image: "A.jpg"

    },

    "67890": {

        name: "Jane Smith",

        dob: "1998-03-22",

        nationality: "American",

        course: "Navigation Training",

        issue_date: "2023-09-10",

        expiry_date: "2025-09-10",

        image: "jane-smith.jpg"

    }

};

// دالة البحث وعرض البيانات

function fetchData() {

    const code = document.getElementById("studentCode").value.trim();

    const student = students[code];

    if (student) {

        document.getElementById("result").innerHTML = `

            <p><strong>Name:</strong> ${student.name}</p>

            <p><strong>Date of Birth:</strong> ${student.dob}</p>

            <p><strong>Nationality:</strong> ${student.nationality}</p>

            <p><strong>Course:</strong> ${student.course}</p>

            <p><strong>Issue Date:</strong> ${student.issue_date}</p>

            <p><strong>Expiry Date:</strong> ${student.expiry_date}</p>

            <img src="${student.image}" alt="Student Image">

        `;

    } else {

        document.getElementById("result").innerHTML = `<p style="color: red;">Student not found</p>`;

    }

}