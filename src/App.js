import React, { useEffect, useState } from "react";


function App() {

  const [EndPoint, setEndPoint] = useState('')
  const [Container, setContainer] = useState([])
  const FetchIMDBData = async () => {

    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${EndPoint}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2e1e746db6mshd128c21570d6267p15a324jsneb4ddada8719',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);

      // console.log(response)
      const data = await response.json();
      console.log(data.d);



      if (data && data.d && data.d.length > 0) {
        setContainer(data.d)

      } else {
        setContainer([])
      }
    }
    catch (error) {
      // console.log(error+"please fix it ");
    }

  }

  useEffect(() => {
    FetchIMDBData()
  }, [EndPoint])


  console.log(Container)

  const onchangehandeler = (e) => {
    setEndPoint(e.target.value)
  }

  const submitFormHandeler = (e) => {
    e.preventDefault()
    FetchIMDBData()

  }

  return (

    <div>
      <form onSubmit={submitFormHandeler}>

        <label> Enter the Movie Name </label>

        <input value={EndPoint} onChange={onchangehandeler} />

        <button> Search </button>

      </form>

      {Container.map((item, index) => {

        return (

          <div key={index}>

            <p> {item.l}</p>

          </div>

        )


      })}


    </div>);
}

export default App;