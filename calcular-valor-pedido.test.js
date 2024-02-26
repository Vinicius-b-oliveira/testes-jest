const calcularValorPedido = require("./index")

it('não deve cobrar o valor do frete quadno o valor for superior a 500 reais', () => {
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando o valor dos produtos for inferior a 500 reais', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche', valor: 50},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(150)
})

it('deve cobrar valor de frete quando o valor dos produtos for exatamente 500 reais', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})

// CASO OS ESTADOS DE ENTREGA RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 20% NA ENTREGA

it('Deve adicionar um acrescimo de 20% no valor da entega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',

        itens: [
            { nome: 'Saudíche bem caro ', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it('Deve adicionar um acrescimo de 20% no valor da entega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',

        itens: [
            { nome: 'Saudíche bem caro ', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC)

    expect(resultado).toBe(620)
})

it('Não deve adicionar um acrescimo de 20% no valor da entega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',

        itens: [
            { nome: 'Saudíche bem caro ', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(600)
})