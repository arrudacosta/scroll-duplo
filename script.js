// Tabelas
let tabela_original = document.querySelector(`.container_tabela`)
let tabela_fake = document.querySelector(`.container_tabela_fake`)

// Scroll feito pelo user na tabela original
tabela_original.addEventListener(`scroll`, (e) => {

    // Coleta os dados da tabela original
    let largura_tabela_original = tabela_original.offsetWidth
    let scroll_tabela_original = tabela_original.scrollLeft
    
    // Aplica esses valores na tabela fake
    tabela_fake.querySelector(`.tabela_fake`).style.minWidth = `${largura_tabela_original}px`
    tabela_fake.scrollTo(scroll_tabela_original, 0)

})

// Scroll feito pelo user na tabela fake
tabela_fake.addEventListener(`scroll`, (e) => {

    // Coleta os dados da tabela fake
    let scroll_tabela_fake = tabela_fake.scrollLeft
    
    // Aplica esses valores na tabela original
    tabela_original.scrollTo(scroll_tabela_fake, 0)

})