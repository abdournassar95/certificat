
const sampleData = {
  
  "502183021": { name: "ALI ABDULKADER",nationality: "SYRIA", rank: "MASTER",photo: "Ali.JPG",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "500337500": { name: "MOHAMED ALI ELSAYD ALI",nationality: "EGYPT", rank: "MASTER",photo: "MOAli.JPG",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2030" } ]},
  "502183022": { name: "ALI ABDULKADER",nationality: "SYRIA", rank: "MASTER",photo: "Ali.JPG",certificates: [ { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "5013038501": { name: "AHMED MOHAMED AMIN",nationality: "EGYPT", rank: "CHIEF MATE",photo: "AMIN.JPG",certificates: [ { name: "COC", issue: "22-05-2025", expiry: "21-08-2025" } ]},
  "5013038503": { name: "AHMED MOHAMED AMIN",nationality: "EGYPT", rank: "CHIEF MATE",photo: "AMIN.JPG",certificates: [ { name: "GMDSS", issue: "22-05-2025", expiry: "21-08-2025" } ]},
  "55688711": { name: "ELSAYED SHAWKAT ELSAYED",nationality: "EGYPT", rank: "2ND ENGINEER",photo: "SAYED.JPG",certificates: [ { name: "COC", issue:  "22-05-2025", expiry: "21-08-2025" } ]},
  "500337503": {name: "WAEL ANWAR JAOHAR",nationality: "SYRIA",rank: "MASTER", photo: "M O.JPG",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "501128714": {name: "WAEL ANWAR JAOHAR",nationality: "SYRIA",rank: "MASTER", photo: "M O.JPG",certificates: [ { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "511545184": {name: "MOHAMAD BADRAH",nationality: "SYRIA",rank: "CHIEF ENGINEER",photo: "CH ENG.JPG",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }] },
  "552765897": {name: "AHMAD ALI KHATIB",nationality: "SYRIA",rank: "CHIEF ENGINEER",photo: "KHATB.JPG",certificates: [{ name: "COC", issue: "11-06-2025", expiry: "10-09-2025" }] },
  "500537711": {name: "HUSSAM HASSAN BARBAR",nationality: "SYRIA",rank: "CHIEF ENGINEER",photo: "HOSAM.JPG",certificates: [{ name: "COC", issue: "02-05-2025", expiry: "01-08-2025" }] },
  "501019867": {name: "KHEDER FAHEM ALALI",nationality: "SYRIA",rank: "2ND OFFICER",photo: "KHEDR.JPG",certificates: [{ name: "COC", issue: "02-05-2025", expiry: "01-08-2025" }] },
  "55688311": {name: "IBRAHIM HAGGAG ELFEKEY",nationality: "EGYPT",rank: "2ND ENGINEER",photo: "IP.JPG",certificates: [{ name: "COC", issue: "04-04-2025", expiry: "03-07-2025" } ] },
  "511672092": {name: "SAMER MANSOUR",nationality: "SYRIA",rank: "THIRD ENGINEER OFFICER",photo: "SAMYR.JPG",certificates: [{ name: "COC", issue: "02-05-2025", expiry: "01-08-2025" } ] },
  "574572957": {name: "MAHMOUD ALY",nationality: "EGYPT",rank: "2ND OFFICER",photo: "2ND OFF.JPG",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "502102121": {name: "GHADER MAZHAR KASHOUR",nationality: "SYRIA",rank: "CHIEF MATE",photo: "GHADER.JPG",certificates: [{ name: "COC", issue: "11-06-2025", expiry: "10-09-2025" } ] },
  "502102122": {name: "GHADER MAZHAR KASHOUR",nationality: "SYRIA",rank: "CHIEF MATE",photo: "GHADER.JPG",certificates: [{ name: "GMDSS", issue: "11-06-2025", expiry: "10-09-2025" } ] },
  "501303875": {name: "MOHAMAD JAMAL ABDO",nationality: "SYRIA",rank: "CHIEF MATE",photo: "CH OFF.JPG",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }]},

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
