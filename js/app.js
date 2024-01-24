let totalGeral;
limpar();

function adicionar() {
// recuperar valores - nome / valor / qtd
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
//calcular o preço = subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

//add no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

//atualizar valor total
    totalGeral = totalGeral + preco;
    campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 00,00'
}