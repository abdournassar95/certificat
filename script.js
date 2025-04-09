
const sampleData = {
  "502183021": {
    name: "ALI ABDULKADER",
    nationality: "SYRIA",
    rank: "MASTER",
    photo: "Ali.JPG",
    certificates: [
      { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }
    ]
  },
  "502183022": {
    name: "ALI ABDULKADER",
    nationality: "SYRIA",
    rank: "MASTER",
    photo: "Ali.JPG",
    certificates: [
      { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" }
    ]
  },
  "55688311": {
    name: "IBRAHIM HAGGAG ELFEKEY",
    nationality: "EGYPT",
    rank: "2ND ENGINEER",
    photo: "IP.JPG",
    certificates: [
      { name: "COC", issue: "04-04-2025", expiry: "03-07-2025" }
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
