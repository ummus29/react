import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProfilBaslik({kullanici}){
return(
    <div style={{padding:`20px`,
        backgroundColor:`lightblue`,
        color:`white`,
        borderRadius:`12px`,
        marginBottom:`20px`
    }}>
<h1>{kullanici.isim}</h1>
<p>{kullanici.bio}</p>



    </div>

);
}
function İstatistik({ etiket,deger}){
return(
<div style={{textAlign:`center`,
    padding:`10px`}}>
        <p><strong>{deger}</strong></p>
        <p style></p>




</div>


);
}



function İstatikBari({tskipci,takip,gonderi}){
return(
    <div style={{ display:`flex`,
justifyContent:`space-around`,
border:`1 px soild gray`,
borderRadius:`8px`,
padding:`10px`,
marginBottom:`20px`


    }}>
<İstatistik etiket="Gönderi" deger={gonderi}></İstatistik>
<İstatistik etiket="Takipçi" deger={takipçi}></İstatistik>
<İstatistik etiket="Takip" deger={takip}></İstatistik>





    </div>
);
}

function Gonderi({icerik,tarih,begeni}){
return(
<div style={{border:`1px soil gtay`,
    borderRadius:`8px`,
    padding:`16px`,
    marginBottom:`10px`
}}>
    <p>{icerik}</p>
    <p style={{color:`blue`}}>
{tarih}-{begeni}begeni


    </p>



</div>





);
}

function SosyalMedyaProfil(){
const kullanici={
    isim:"Efe Çetinkaya",
    bio:"Yazılım öğrwncisi| React öğreniyorum",
};

const gonderiler=[
    {id:1, 
    icerik:"Bugün React bileşenlerini öğrendim!",
tarih:"2 saat önce",
begeni:12},

{id:3,
    icerik:"ilk projemi vite ile oluşturdum.",
    tarih:"3 gün önce ",
    begeni:24
},
];
}

return(
<div style={{maxWidth:`500px`,
    margin:`0 auto`,
    padding:`20px`,
}}>

<ProfilBaslik kullanici={kullanici}></ProfilBaslik>
<İstatikBari takipçi={1234}
takip={567} gonderi={gonderiler.length}></İstatikBari>
<h2>Göndereiler</h2>
{gonderiler.map(g=>(
    <Gonderi key={g.id}
    icerik={g.icerik}
    tarih={g.tarih}
    begeni={g.begeni}></Gonderi>
))}






</div>






)