import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Profil({isim,bolum}){
  return(
<div style={{gap:`60px`,
  
}}>
<p>isim:  {isim}</p>
<p>Bölüm:  {bolum}</p>



</div>
 );
}

function Dersler(){
return(
<>
<ul>
<li>Javascript Dersleri</li>
<li>Veritabanı Uygulama Dilleri</li>
<li>Web Grefik Tasarımı</li>


</ul>




</>

);
}

function App(){
return(
<>
<Profil isim="Çisem Yaşar" bolum="Ön Yüz Yazılım Geliştirme"></Profil>
<Dersler></Dersler>


</>



);

}
export default App;