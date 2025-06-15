function isAuthenticated(request, response, next) {
    if (request.session.user) {
      return next();
    } else {
      return response.redirect('/login?error=Please login');
    }
  }
  
function isAdmin(request , response , next){
  if (request.session.role == "admin"){
    return next();
  }
  else{
    return response.redirect('/login?error=Please login');
  }
}
module.exports = { isAuthenticated ,isAdmin};