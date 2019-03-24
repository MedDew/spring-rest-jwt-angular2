export class User {
    private id: number
    private username: string
    private email: string
    private password: string
    private roles: string[]

    constructor()
    constructor(id : number, username : string, email : string, password : string, roles: string[])
    constructor(id? : number, username? : string, email? : string, password? : string, roles?: string[]){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public getId() : number{
        return this.id;
    }
    
    public setId(id : number) : void{
        this.id = id;
    }
    
    public getUsername() : string{
        return this.username;
    }
    
    public setUsername(username : string) : void{
        this.username = username;
    }
    
    public getEmail() : string{
        return this.email;
    }
    
    public setEmail(email : string) : void{
        this.email = email;
    }
    
    public getPassword() : string{
        return this.password;
    }
    
    public setPassword(password : string) : void{
        this.password = password;
    }
    
    public getRoles() : string[]{
        return this.roles;
    }
    
    public setRoles(roles : string[]) : void{
        this.roles = roles;
    }
}
