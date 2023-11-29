const lista = ["Um", "Dois", "Três"];

function getLista()
{
    return lista;
}

function limparLista()
{
    lista.splice(0, 3);
    
}

export{getLista, limparLista};