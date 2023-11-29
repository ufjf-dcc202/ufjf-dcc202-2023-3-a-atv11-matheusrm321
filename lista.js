const lista = ["Um", "Dois", "Três"];

function getLista()
{
    return lista;
}

function limparLista()
{
    lista.splice(0);
    
}

export function adicionarNaLista(novoItem)
{
    lista.push(novoItem)
}

export{getLista, limparLista};