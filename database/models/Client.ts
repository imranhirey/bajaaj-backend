import { ClientSignup } from '../../interfaces';
import { generateId } from '../../utils/generateid';
import { hashPassword } from '../../utils/hashPassword';
import connection from '../Createconnection';


type SaveClient = (client:ClientSignup) => Promise<any>;


const saveClient:SaveClient = async (client) => {
    const hashedPassword = await hashPassword(client.password);
    const clientid= generateId()
    const clientData = {
        id:clientid,
        fullname: client.fullname,
        email: client.email,
        password: hashedPassword,
        phonenumber: client.phonenumber
    }
    const sql = `INSERT INTO clients SET ?`;
    return new Promise(async(resolve, reject) => {
        await connection.query(sql, clientData, (err, result) => {
            
        })


    })

    
   
    

    

}




export default saveClient;


