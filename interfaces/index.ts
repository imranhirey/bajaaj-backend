export interface Client {
    id:Number,
    fullname:String,
    phonenumber:Number,
    photourl?:String
  }
  
  export interface Rider {
    id: number;
    name: string;
    email: string;
    password: string;
    licenseNumber: string;
  }

  export interface ClientSignup{
    fullname:string,
    phonenumber:Number,
    email:String,
    password:string,
    photourl?:string
    id:Number

  }
  export interface RiderSignup{
    fullname:string,
    phonenumber:Number,
    email:String,
    password:string,
    licenseNumber:string,
    id:Number
    isverified:Boolean
  }

  export interface OutToken{
    token:string,
    timecreated:Date,
    revoked:Boolean,

  }

  export interface InToken{
    email:string,
    name:string,
    id:Number,
    role:string

  }
  
  export interface Clientlogin{
    emailorphone :string,
    password:string
    devicetype:string
  }