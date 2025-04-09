
const sampleData = {
      "123456": {
        name: "John Doe",
        nationality: "Panamanian",
        rank: "Captain",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Basic Safety Training", issue: "2023-01-15", expiry: "2028-01-15" }
        ]
      },
      "234567": {
        name: "Jane Smith",
        nationality: "Panamanian",
        rank: "Chief Officer",
        photo: "https://via.placeholder.com/100",
        certificates: [
          { name: "Bridge Resource Management", issue: "2022-06-01", expiry: "2027-06-01" }
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
