const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    business: document.getElementById("business").value
  };

  try {
    const response = await fetch("/send", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if(result.success){
      alert("Заявка отправлена!");
      form.reset();
    } else {
      alert("Ошибка отправки");
    }
  } catch (err){
    alert("Сервер не отвечает");
  }
});