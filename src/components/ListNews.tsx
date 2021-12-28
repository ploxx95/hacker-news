import { useEffect, useState } from 'react'
import { getDataApi } from '../services/getDataApi'
import NewElement from './NewElement'

function ListNews() {
  const [state, setState] = useState({})
  useEffect(() => {
    async function getNews() {
      const data = await getDataApi({})
      setState(data)
    }
    getNews()
  }, [])
  console.log("esto es DATAAAAAAA  : ", state)

  return (
    <div>
      <NewElement>
        Event-driven state management in React using Storeon
      </NewElement>
    </div>
  )
}

export default ListNews
