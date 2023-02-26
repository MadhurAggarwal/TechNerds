import brain from './img/brain.jpg';
import heart from './img/heart.jpg';
import kidney from './img/Kidney.jpg';
import './Diagnosis.css'
const Diagnosis = () => {
    return ( 
        <div>
            <h1>Disease Diagnosis</h1>
            <div className='images'>
            <img src={brain}></img>
            <h3>Brain Scan</h3>
            </div>
            <div className='images'>
            <img src={heart}></img>
            <h3>Heart Dianosis</h3>
            </div>
            <div className='images'>
            <img src={kidney}></img>
            <h3>Kidney Checkup</h3>
            </div>
            
            
            
        </div>
     );
}
 
export default Diagnosis;