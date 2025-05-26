function isAuthenticated(request, response, next) {
    if (request.session.user) {
      return next();
    } else {
      return response.redirect('/login?error=Please login Again');
    }
  }
  
function isAdmin(request , response , next){
  if (request.session.role == "admin"){
    return next();
  }
  else{
    return response.redirect('/login?error=Please login Again');
  }
}
module.exports = { isAuthenticated ,isAdmin};