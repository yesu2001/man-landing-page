import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import FooterSection from '../../components/footerSection/FooterSection';
import './Media.css';

function Media() {
    const [data,setData] = React.useState([]);
    React.useEffect(() => {
        window.scrollTo(0,0);
        fetch('http://localhost:8000/getMedia')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setData(result);
        })
    },[])
  document.title = 'Media - MAN.';
  return (
    <div>
        <Navbar/>
        {
            data.map((item,index) => (
                <div key={index} className='media_section'>
                    <h3 className="section_title">{item.title}</h3>
                    <p>{item.content}</p>
                    <p><span>{item.createDate}</span></p>
                </div>
            ))
        }

        <FooterSection/>
    </div>
  )
}

export default Media