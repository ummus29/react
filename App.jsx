import { useState } from 'react'
import './App.css'
 
function Profil(){
const [isim,setIsim]=useState(``);
const[mail,setMail]=useState(``);
return(
<div className='profil-card'>
<h2>Profil Düzenleme</h2>
<div className='input'>
<label>İsim:</label>
<input value={isim}
onChange={(e)=>setIsim(e.target.value)}
placeholder='Adınızı girin'/>
</div>


<div className='input'>
<label>Mail:</label>
<input value={mail}
onChange={(e)=>setMail(e.target.value)}
placeholder='Mail girin'/>

</div>


<div className='onizleme'>
  <h3>Ön izleme</h3>
  <p><strong>İSİM:</strong>{isim  || `(bos)`}</p>
  <p><strong>Mail:</strong>{mail|| `(bos)`}</p>
</div>
</div>
);

}

export default Profil;