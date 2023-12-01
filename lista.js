const lista = ["Um", "Dois", "Três"];

function getLista()
{
    return lista;
}

function limpaLista()
{
    lista.splice(0);
}

export function removeDaLista(x)
{
    lista.splice(x, 1);
}

export function adicionaNaLista(novoItem)
{
    lista.push(novoItem);
}

export{getLista, limpaLista};