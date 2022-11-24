var menus = [
    {
        titulo : 'Dashboard',
        url: 'index.html',
        icone: 'fas fa-home'
    },
    {
        titulo : 'Listar',
        url: 'listar.html',
        icone: 'fas fa-list'
    },
    {
        titulo : 'Cadastrar',
        url: 'cadastrar.html',
        icone: 'fas fa-plus'
    }
        
];

menus.forEach(function(item) {
    document.querySelector('#nosso-menu').innerHTML += `
    <li class="nav-item">
    <a class="nav-link" aria-current="page" href="${item.url}">
        <i class="fas ${item.icone}"></i>
        ${item.titulo}
    </a>
</li>`
}
)