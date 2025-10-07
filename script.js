
function generateID() {
  document.getElementById("cardName").textContent = document.getElementById("name").value;
  document.getElementById("cardUsn").textContent = document.getElementById("usn").value;
  document.getElementById("cardBranch").textContent = document.getElementById("branch").value;
  document.getElementById("cardDob").textContent = document.getElementById("dob").value;
  document.getElementById("cardAdmission").textContent = document.getElementById("admission").value;
  document.getElementById("cardValid").textContent = document.getElementById("valid").value;

  const photoInput = document.getElementById("photo").files[0];
if (photoInput) {
  document.getElementById("cardPhoto").src = URL.createObjectURL(photoInput);
}
  document.getElementById("idCard").style.display = "block";
}

function downloadHandler(){
    html2pdf().from(idCard).save("idcard.pdf")
}

