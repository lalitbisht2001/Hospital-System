import style from "./Module.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClinicMedical , faPuzzlePiece , faMoneyBill, faMoneyCheckAlt, faChartLine, faUsers,faClipboardCheck,faBoxes } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Modules() {
    const boxes = [
        {
            heading: "Clinical",
            font: <FontAwesomeIcon icon={faClinicMedical} className={style.form}/>,
            data1: "Appointment",
            data2:"OPD",
            data3:"EMR (Optom/Doctor)",
            data4:"IPD",
        },
        {
            heading: "Inventories",
            font: <FontAwesomeIcon icon={faBoxes} className={style.form} />,
            data1: "Pharmacy",
            data2: "Optical",
            data3: "OT Inventories",
            data4: "Supply Chain",
        },
        {
            heading : "Complaince",
            font : <FontAwesomeIcon icon={faClipboardCheck} className={style.form}/>, 
            data1 :"NABH",
            data2 : "HIPAA + HL7",
            data3: "ABDM",
            data4:"JCI"
        },
        {
            heading : "Patient Satisfaction",
            font : <FontAwesomeIcon icon={faUsers} className={style.form}/>,
            data1 :"Self Registration",
            data2 : "Feedback",
            data3: "Queue Management",
            data4:"Camp Patients"
        },
        {
            heading : "AI Analytics",
            font : <FontAwesomeIcon icon={faChartLine} className={style.form}/>,
            data1 :"Direct Reports",
            data2 : "BI Reports",
            data3: "MIS Reports",
            data4:"Easy Intertillage Bot"
        },
        {
            heading : "Biling",
            font :<FontAwesomeIcon icon={faMoneyBill} className={style.form}/> ,
            data1 :"Billing Clearance",
            data2 : "Discount Capping",
            data3: "Patient Wallet",
            data4:"Multi Payment Model"
        },
        {
            heading : "Integeration",
            font : <FontAwesomeIcon icon={faPuzzlePiece} className={style.form} />,
            data1 :"Barcode/QR Code",
            data2 : "Whatsapp Integration + BOT",
            data3: "AR/NCT Integration",
            data4:"Tally"
        },
        {
            heading : "Reimbursement",
            font : <FontAwesomeIcon icon={faMoneyCheckAlt} className={style.form}/>,
            data1 :"TPA Documents",
            data2 : "TPA/Panel Configuration ",
            data3: "Date Wise Credit",
            data4:"Credit Reports"
        },
    ];

    return (
        <div className={style.main}>
            <div className={style.main1}>
                <p>MODULES</p>
            </div>
            <div className={style.main2}>
                {
                    boxes.map((value, i) => (
                        <div key={i} className={style.box}>
                            <div className={style.front}>
                                <span>{value.heading}</span>
                                {value.font}
                            </div>
                            <div className={style.back}>
                                <p className={style.point1}><ArrowForwardIcon style={{fontSize:"1.3em"}} className={style.logo}/>{value.data1}</p>
                                <p className={style.point1}><ArrowForwardIcon style={{fontSize:"1.3em"}} className={style.logo}/>{value.data2}</p>
                                <p className={style.point1}><ArrowForwardIcon style={{fontSize:"1.3em"}} className={style.logo}/>{value.data3}</p>
                                <p className={style.point1}><ArrowForwardIcon style={{fontSize:"1.3em"}} className={style.logo}/>{value.data4}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Modules;
