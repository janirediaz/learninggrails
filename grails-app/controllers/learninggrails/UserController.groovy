package learninggrails

class UserController {

    def index() {

    }

    def saveUser(){
        User u = new User();
        u.nombre = params.nombre;
        u.apellido = params.apellido;
        u.edad = Integer.parseInt(params.edad);
        u.save(flush:true);
        render(view:"savesuccess");
        redirect(controller:'user', action:'index');
    }

    def lista(){
        User u = new User();
        def listaUsuarios = u.findAll();
        [listaUsuarios:listaUsuarios];
    }

    def delete(){
        User u = User.get(params.id);
        u.delete(flush:true);
        redirect(controller:'user',action:'lista');

    }

    def getUser(){
        def user = User.get(params.id);
        [user : user];
    }

    def updateUser(){
        def user = User.get(params.id);
        user.nombre = params.nombre;
        user.apellido = params.apellido;
        user.edad = Integer.parseInt(params.edad);
        user.save(flush:true);
        redirect(controller:'user', action:'lista');
    }

    def login(){
        /*def user = User.get(params.user, params.password);
        if(user){
            session.user = user;
            redirect(controller: 'user', action: 'lista');
        }else{
            redirect(controller: 'user', action: 'login');
        }
        */

        if(params.user == "admin" && params.password == "pass"){
            println("login succeed");
            session.user = "admin";
        }else{
            println("login failed");

        }





    }




}
