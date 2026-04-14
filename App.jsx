import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Meyveler(){
const Meyve=('Elma','Armut','Muz','Çilek','Erik');
return(
<>
<h2>Meyve Listesi</h2>
<ul>
{Meyve.map((Meyvelerin,index)=>(
  <li key={index}>{Meyvelerin}</li>
))}


</ul>
<p>Toplana: {Meyve.length}</p>




</>
);
}


function OgrenciListesi(){
const ogrenciler=[
{id:1, isim:'Çisem',puan:85},
{id:2, isim:'Tuğba',puan:55},
{id:3, isim:'Efe',puan:95},




];

return(
<>
<h3>Öğrenci Listesi</h3>
<table>
<tr>
  <th>ID</th>
<th>Adı</th>
<th>Puan</th>
</tr>
{ogrenciler.map(ogr=>(
<tr>
<td>{ogr.id}</td>
<td>{ogr.isin}</td>
<td>{ogr.puan}</td>
<td>{ogr.puan>=80? 'Başarılı':'Çıkış'}</td>


</tr>



))}


</table>




</>




);
}


function App(){
  return(
<>
<Meyveler></Meyveler>
<OgrenciListesi></OgrenciListesi>

</>
 );
}
export default App;