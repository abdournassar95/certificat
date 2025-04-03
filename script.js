
function fetchCertificate() {

    let studentCode = document.getElementById("studentCode").value;

    

    // محاكاة بيانات الشهادة المخزنة

    let certificateData = {

        "00000": {

            "name": "عبده رجب احمد نصار ",

            "dob": "05-08-1985",

            "nationality": "EGYPT",

            "issueDate": "2024-01-15",

            "expiryDate": "2025-01-15",

            "course": "طباخ علي السفن التجارية"

        }
            
    };


    if (certificateData[studentCode]) {

        let cert = certificateData[studentCode];

        document.getElementById("certificateDetails").innerHTML = `

            <h2>Certificate Details</h2>

            <p><strong>Name:</strong> ${cert.name}</p>

            <p><strong>Date of Birth:</strong> ${cert.dob}</p>

            <p><strong>Nationality:</strong> ${cert.nationality}</p>

            <p><strong>Issued on:</strong> ${cert.issueDate}</p>

            <p><strong>Expires on:</strong> ${cert.expiryDate}</p>

            <p><strong>Course:</strong> ${cert.course}</p>

        `;

    } else {

        document.getElementById("certificateDetails").innerHTML = `<p>Certificate not found.</p>`;

    }

}
