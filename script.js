
const sampleData = {
      "502183021": {
        name: "ALI ABDULKADER",
        nationality: "SYRIA",
        rank: "Captain",
        photo: "ali.jpg",
        certificates: [
          { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }
        ]
      },
      
     "502183022": {
        name: "ALI ABDULKADER",
        nationality: "SYRIA",
        rank: "Captain",
        photo: "ali.jpg",
        certificates: [
          { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" }
        ]
      },
      
      "5568831": {
        name: "IBRAHIM HAGGAG ELFEKEY",
        nationality: "EGYPT",
        rank: "2ND ENGINER",
        photo: "IP.JPG",
        certificates: [
          { name: "COC", issue: "04-04-2025", expiry: 03-07-2025" }
        ]
      },
      "345678": {
        name: "Carlos Ruiz",
        nationality: "Panamanian",
        rank: "Engineer",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Engine Room Resource Management", issue: "2023-03-22", expiry: "2028-03-22" }
        ]
      },
      "456789": {
        name: "Ana Torres",
        nationality: "Panamanian",
        rank: "Second Officer",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Radar Navigation", issue: "2021-11-10", expiry: "2026-11-10" }
        ]
      },
      "567890": {
        name: "Luis Herrera",
        nationality: "Panamanian",
        rank: "Bosun",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Advanced Seamanship", issue: "2022-01-01", expiry: "2027-01-01" }
        ]
      },
      "678901": {
        name: "Maria Gonzalez",
        nationality: "Panamanian",
        rank: "Cook",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Food Hygiene", issue: "2022-02-15", expiry: "2027-02-15" }
        ]
      },
      "789012": {
        name: "Pedro Alvarez",
        nationality: "Panamanian",
        rank: "Able Seaman",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Watchkeeping", issue: "2020-09-01", expiry: "2025-09-01" }
        ]
      },
      "890123": {
        name: "Lucia Moreno",
        nationality: "Panamanian",
        rank: "Deck Cadet",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Maritime English", issue: "2023-05-20", expiry: "2028-05-20" }
        ]
      },
      "901234": {
        name: "Jorge Castillo",
        nationality: "Panamanian",
        rank: "Chief Engineer",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Marine Engineering", issue: "2021-08-30", expiry: "2026-08-30" }
        ]
      },
      "012345": {
        name: "Elena Vargas",
        nationality: "Panamanian",
        rank: "Third Officer",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "GMDSS", issue: "2023-07-01", expiry: "2028-07-01" }
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
