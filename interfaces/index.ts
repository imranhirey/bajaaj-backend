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

  export interface AppToken{
    token:string,
    timecreated:Date,
    revoked:Boolean,

  }
  
  export interface Clientogin{
    email:string,
    password:string
    devicetype:string
  }