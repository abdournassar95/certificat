
const sampleData = {
  "123456": {
    name: "ABDOU RAGAB NASSAR",
    nationality: "EGYPT",
    rank: "COOK",
    photo: "Ali.JPG",
    certificates: [
      { name: "Basic Safety Training", issue: "2023-01-15", expiry: "2028-01-15" }
    ]
  },
  "234567": {
    name: "MOHAMED AHMED SALEH",
    nationality: "EGYPT",
    rank: "ABLE SEAMAN",
    photo: "Mohamed.JPG",
    certificates: [
      { name: "Advanced Fire Fighting", issue: "2022-10-10", expiry: "2027-10-10" }
    ]
  },
  "345678": {
    name: "AHMED HASSAN ALI",
    nationality: "EGYPT",
    rank: "CHIEF ENGINEER",
    photo: "Ahmed.JPG",
    certificates: [
      { name: "Medical First Aid", issue: "2021-05-20", expiry: "2026-05-20" }
    ]
  },
  "456789": {
    name: "KHALED MOSTAFA FARAG",
    nationality: "EGYPT",
    rank: "OILER",
    photo: "Khaled.JPG",
    certificates: [
      { name: "Personal Survival Techniques", issue: "2020-07-30", expiry: "2025-07-30" }
    ]
  },
  "567890": {
    name: "SAID IBRAHIM ZAKI",
    nationality: "EGYPT",
    rank: "MASTER",
    photo: "Said.JPG",
    certificates: [
      { name: "Security Awareness Training", issue: "2023-03-05", expiry: "2028-03-05" }
    ]
  }
};


function searchSeafarer() {
  const code = document.getElementById('seafarerCode').value.trim();
  const data = sampleData[code];

  if (data) {
    document.getElementById('result').style.display = 'block';

    document.getElementById('name').textContent = data.name;
    document.getElementById('nationality').textContent = data.nationality;
    document.getElementById('rank').textContent = data.rank;
    document.getElementById('photo').src = data.photo;

    if (data.certificates.length > 0) {
      const cert = data.certificates[0];
      document.getElementById('certName').textContent = cert.name;
      document.getElementById('certIssue').textContent = cert.issue;
      document.getElementById('certExpiry').textContent = cert.expiry;
    }
  } else {
    alert('No data found for this code.');
    document.getElementById('result').style.display = 'none';
  }
}
