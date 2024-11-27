document.addEventListener("DOMContentLoaded", () => {
    const entrada = document.getElementById("entrada");
    const tasa = document.getElementById("tasa");
    const resultado = document.getElementById("resultado");
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const monto = parseFloat(entrada.value);
        const porcentaje = parseFloat(tasa.value);

        if (isNaN(monto) || monto <= 0) {
            resultado.textContent = "Por favor, ingresa un monto válido.";
        } else {
            const interes = monto * porcentaje;
            resultado.textContent = `El ${porcentaje * 100}% del monto ingresado es: ${interes.toFixed(2)} pesos.`;
        }
    });
});
