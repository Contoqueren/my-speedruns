const adminMW = (request, response, next) => {
    //est-ce que l'utilisateur est connecté
    if (!request.session.user) {
        //pas connecté : on le redirige vers la page login
        return response.redirect('/login');
    }

    //sinon on appelle next
    next();
}

module.exports = adminMW;