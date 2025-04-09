
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
  "574572957": {
    name: "MAHMOUD ALY",
    nationality: "EGYPT",
    rank: "2ND OFFICER",
    photo: "2ND OFF.JPG",
    certificates: [
      { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }
    ]
  },
  "501303875": {
    name: "MOHAMAD JAMAL ABDO",
    nationality: "SYRIA",
    rank: "CHIEF MATE",
    photo: "CH OFF.JPG",
    certificates: [
      { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }
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
