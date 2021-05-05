import React, { useEffect } from 'react'
import Root from 'components/Root'
import useSWR from 'swr'
import { fetcher } from 'helpers/fetcher.helper'

const App = () => {
  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)

  useEffect(() => {
    if(data) console.log(data)
  }, [data])

  return (
    <Root>
      <p>{data && data.title}</p>
    </Root>
  )
}

export default App
