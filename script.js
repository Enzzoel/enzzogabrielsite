



// SCRIPT DE ANIVERSÁRIO para mudar automaticamente
const nascimento = new Date(2002, 8, 23); // Mês é 0-indexado (setembro = 8)
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    document.getElementById("idade-enzzo").textContent = idade;