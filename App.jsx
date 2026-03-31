import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Isim(){
    return(
<h1 className='selamlama'> Merhaba <span>Çisem Yaşar</span></h1>





    );
}

const AltBilgi=()=>{
return(
<footer  className='altbilgi'>
    <p>2026- Ön Yüz Yazılım Geliştirme</p>
</footer>



);
}

function Sayac(){
const[sayi,setSayi]=useState(0);
return(
<div className='sayac-card'>
    <p className='sayac-label'>Sayaç</p>
    <h1 className={`sayac-deger ${sayi>0 ?  `pozitif` : sayi<0 ?`negatif`:0} `}>{sayi}</h1>



<div className='butonlar'>   
    <button className='btn artir' onClick={()=>setSayi(sayi+1)}>Artır</button>
    <button className='btn artir' onClick={()=>setSayi(sayi-1)}>Azalt</button>
    <button className='btn artir' onClick={()=>setSayi(0)}>Sıfır</button>

</div>
</div>
);



}


function App(){
return(
<div className='app'>
    <Isim></Isim>
    <Sayac></Sayac>
    <AltBilgi></AltBilgi>
</div>


);
}
export default App;