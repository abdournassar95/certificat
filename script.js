// بيانات الطلاب المخزنة داخل JavaScript

const students = {

    "55688311": {

        name: "IBRAHIM HAGGAG IBRAHIM ELFEKY",

        dob: "16-09-1986",

        nationality: "EGYPT",

        course: "COC",

        issue_date: "04-04-2025",

        expiry_date: "03-07-2025",

        image: "IP.jpg"

    },
    
 "502183021": {

        name: "ALI ABDULKADER",

        dob: "26-05-1975",

        nationality: "SYRIA",

        course: "COC",

        issue_date: "14-04-2025",

        expiry_date: "13-07-2025",

        image: "ALI.jpg"

    },
    "502183022": {

        name: "ALI ABDULKADER",

        dob: "26-05-1975",

        nationality: "SYRIA",

        course: "GMDSS",

        issue_date: "14-04-2025",

        expiry_date: "13-07-2025",

        image: "ALI.jpg"

    },
    
"00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },

    "00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },
    
"00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },
    
"00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },
    
    "00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },
    
    "00000": {

        name: "ABDOU RAGAB AHMED NASSAR",

        dob: "1985-08-05",

        nationality: "EGYPT",

        course: "طباخ علي السفينة",

        issue_date: "2024-01-01",

        expiry_date: "2029-01-01",

        image: "A.jpg"

    },
    
    "11111": {

        name: "ALI ABDULKADER",

        dob: "1975-05-26",

        nationality: "SYRIA",

        course: "GMDSS",

        issue_date: "2023-09-10",

        expiry_date: "2025-09-10",

        image: "1.jpg"

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
