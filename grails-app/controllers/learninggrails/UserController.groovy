package learninggrails

class UserController {

    def index() {
        System.out.println("Hola");
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
}
