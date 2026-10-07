import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const yeniEtkinlik = {
      id: "event-" + (events.length + 1),
      title: document.querySelector("#baslik").value.trim(),
      category: document.querySelector("#kategori").value.trim(),
      date: document.querySelector("#tarih").value,
      time: document.querySelector("#saat").value,
      location: document.querySelector("#yer").value.trim(),
      capacity: Number(document.querySelector("#kontenjan")?.value) || 0,
      description: document.querySelector("#aciklama").value.trim()
    };

    // Mevcut dizinin üzerine yazmadan yeni etkinliği ekliyoruz
    events.push(yeniEtkinlik);

    // Başarı mesajı ve altta JSON çıktısı
    let jsonKutusu = document.querySelector("#json-ciktisi");
    if (!jsonKutusu) {
      jsonKutusu = document.createElement("div");
      jsonKutusu.id = "json-ciktisi";
      form.after(jsonKutusu);
    }

    jsonKutusu.innerHTML = `
      <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px;">
        <p style="color: green; font-weight: bold;">Etkinlik başarıyla eklendi!</p>
        <h3>Eklenen Etkinlik (JSON Formatı):</h3>
        <pre style="background: #ffffff; padding: 10px; border-radius: 5px; overflow-x: auto;">${JSON.stringify(yeniEtkinlik, null, 2)}</pre>
      </div>
    `;

    form.reset();
  });
}