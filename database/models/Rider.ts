import { RiderSignup } from '../../interfaces';
import { generateId } from '../../utils/generateid';
import { hashPassword } from '../../utils/hashPassword';
import connection from '../Createconnection';


type SaveRider = (Rider:RiderSignup) => Promise<any>;


const saveRider:SaveRider = async (Rider) => {
    const hashedPassword = await hashPassword(Rider.password);
    const Riderid= generateId()
    const RiderData = {
        id:Riderid,
        fullname: Rider.fullname,
        email: Rider.email,
        password: hashedPassword,
        phonenumber: Rider.phonenumber,
        licenseNumber: Rider.licenseNumber,
        isverified: Rider.isverified

    }
    const sql = `INSERT INTO riders SET ?`;
    return new Promise(async(resolve, reject) => {
         connection.query(sql, RiderData, (err, result) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(result)
            }
        })


    })

    
   
    

    

}




export default saveRider;


