
const sampleData = {
  "502183022":   {name: "ALI ABDULKADER",nationality: "SYRIA", rank: "MASTER",photo: "Ali.JPG", "shipName": "BOMOSTAFA O",certificates: [ { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "502183021":   {name: "ALI ABDULKADER",nationality: "SYRIA", rank: "MASTER",photo: "Ali.JPG", "shipName": "BOMOSTAFA O",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "500337503":   {name: "WAEL ANWAR JAOHAR",nationality: "SYRIA",rank: "MASTER", photo: "M O.JPG", "shipName": "HAJ MOHAMED",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "501128714":   {name: "WAEL ANWAR JAOHAR",nationality: "SYRIA",rank: "MASTER", photo: "M O.JPG", "shipName": "HAJ MOHAMED",certificates: [ { name: "GMDSS", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "511545184":   {name: "MOHAMAD BADRAH",nationality: "SYRIA",rank: "CHIEF ENGINEER",photo: "CH ENG.JPG", "shipName": "BOMOSTAFA O",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }] },
  "552765897":   {name: "AHMAD ALI KHATIB",nationality: "SYRIA",rank: "CHIEF ENGINEER",photo: "KHATB.JPG", "shipName": "HAJ MOHAMED",certificates: [{ name: "COC", issue: "11-06-2025", expiry: "10-09-2025" }] },
  "55688711":    {name: "ELSAYED SHAWKAT ELSAYED",nationality: "EGYPT", rank: "2ND ENGINEER",photo: "SAYED.JPG",  "shipName": "SCOTLAND BAY",certificates: [ { name: "COC", issue:  "22-05-2025", expiry: "21-08-2025" } ]},
  "502102121":   {name: "GHADER MAZHAR KASHOUR",nationality: "SYRIA",rank: "CHIEF MATE",photo: "GHADER.JPG", "shipName": "HAJ MOHAMED",certificates: [{ name: "COC", issue: "11-06-2025", expiry: "10-09-2025" } ] },
  "502102122":   {name: "GHADER MAZHAR KASHOUR",nationality: "SYRIA",rank: "CHIEF MATE",photo: "GHADER.JPG", "shipName": "HAJ MOHAMED",certificates: [{ name: "GMDSS", issue: "11-06-2025", expiry: "10-09-2025" } ] },
  "501303875":   {name: "MOHAMAD JAMAL ABDO",nationality: "SYRIA",rank: "CHIEF MATE",photo: "CH OFF.JPG", "shipName": "BOMOSTAFA O",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" }]},
  "501019867":   {name: "KHEDER FAHEM ALALI",nationality: "SYRIA",rank: "2ND OFFICER",photo: "KHEDR.JPG", "shipName": "HAJ MOHAMED",certificates: [{ name: "COC", issue: "02-05-2025", expiry: "01-08-2025" }] },
  "55688311":    {name: "IBRAHIM HAGGAG ELFEKEY",nationality: "EGYPT",rank: "2ND ENGINEER",photo: "IP.JPG",  "shipName": "BOMOSTAFA O",certificates: [{ name: "COC", issue: "04-07-2025", expiry: "03-10-2025" } ] },
  "511672092":   {name: "SAMER MANSOUR",nationality: "SYRIA",rank: "THIRD ENGINEER OFFICER",photo: "SAMYR.JPG", "shipName": "HAJ MOHAMED",certificates: [{ name: "COC", issue: "02-05-2025", expiry: "01-08-2025" } ] },
  "574572957":   {name: "MAHMOUD ALY",nationality: "EGYPT",rank: "2ND OFFICER",photo: "2ND OFF.JPG", "shipName": "BOMOSTAFA O",certificates: [{ name: "COC", issue: "14-04-2025", expiry: "13-07-2025" } ]},
  "500337500":   {name: "MOHAMED ALI ELSAYD ALI",nationality: "EGYPT", rank: "MASTER",photo: "MOAli.JPG", "shipName": "SCOTLAND BAY",certificates: [ { name: "COC", issue: "14-04-2025", expiry: "13-07-2030" } ]},

  
  
  
};

function getCertificateStatus(expiryDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // reset time to midnight

    const [day, month, year] = expiryDate.includes('/') ? expiryDate.split('/') : expiryDate.split('-');

    const expiry = new Date(`${year}-${month}-${day}`);
    expiry.setHours(0, 0, 0, 0); // reset time to midnight

    const timeDiff = expiry - today;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    if (daysDiff < 0) return { label: 'Expired', class: 'badge-expired' };
    if (daysDiff <= 30) return { label: 'Expiring Soon', class: 'badge-warning' };
    return { label: 'Valid', class: 'badge-valid' };
  }
function searchSeafarer() {
  const code = document.getElementById('seafarerCode').value.trim();
  const data = sampleData[code];

  if (data) {
    const resultEl = document.getElementById('result');
    resultEl.style.display = 'block';
    resultEl.style.opacity = 0;
    resultEl.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => resultEl.style.opacity = 1, 10);

    document.getElementById('marineId').textContent = code;
    document.getElementById('name').textContent = data.name;
    document.getElementById('nationality').textContent = data.nationality;
    document.getElementById('rank').textContent = data.rank;
    document.getElementById('photo').src = data.photo;

    let certsHTML = '';
    let overallStatus = 'Valid';
    let statusClass = 'badge-valid';

    data.certificates.forEach(cert => {
      const status = getCertificateStatus(cert.expiry);
      if (status.label === 'Expired') {
        overallStatus = 'Expired';
        statusClass = 'badge-expired';
      } else if (status.label === 'Expiring Soon' && overallStatus !== 'Expired') {
        overallStatus = 'Expiring Soon';
        statusClass = 'badge-warning';
      }

      certsHTML += `
        <div class="border rounded p-3 mb-3">
          <h6 class="fw-bold">${cert.name} <span class="badge ${status.class} float-end">${status.label}</span></h6>
          <p class="mb-1"><strong>Issue Date:</strong> ${cert.issue}</p>
          <p class="mb-1"><strong>Expiry Date:</strong> ${cert.expiry}</p>
          <p class="mb-0"><strong>Authority:</strong> Panama Maritime Authority</p>
        </div>
      `;
    });

    document.getElementById('certList').innerHTML = certsHTML;
    const certEl = document.getElementById('certificates');
    certEl.style.display = 'block';
    certEl.style.opacity = 0;
    certEl.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => certEl.style.opacity = 1, 10);

    const statusEl = document.getElementById('statusLabel');
    statusEl.textContent = overallStatus;
    statusEl.className = `status-active badge ${statusClass}`;

  } else {
    alert('No data found for this Marine ID.');
    document.getElementById('result').style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                      "August", "September", "October", "November", "December"];
  const today = new Date();
  const footerText = `This information is verified and maintained by the Panama Maritime Authority. Last updated: <strong>${monthNames[today.getMonth()]} ${today.getFullYear()}</strong>`;
  document.getElementById("footerNote").innerHTML = footerText;
});
