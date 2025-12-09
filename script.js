const btn = document.getElementById("btn");
const factText = document.getElementById("fact");

btn.addEventListener("click", async () => {
  factText.textContent = "Carregando...";

  try {
    // 1. Buscar fato em inglês
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const factInEnglish = data.fact;

    // 2. Traduzir para português usando MyMemory Translation API
    const translateResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(factInEnglish)}&langpair=en|pt-BR`
    );

    const translatedData = await translateResponse.json();
    const factInPortuguese = translatedData.responseData.translatedText;

    // 3. Mostrar na tela
    factText.textContent = factInPortuguese;

  } catch (error) {
    factText.textContent = "Erro ao buscar ou traduzir o fato 😿";
  }
});
