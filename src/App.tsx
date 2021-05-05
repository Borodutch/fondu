import React, { useEffect } from 'react'
import Root from 'components/Root'
import useApp from 'hooks/useApp'
import { BodyText } from 'components/Text'
import useSWR from 'swr'
import { fetcher } from 'helpers/fetcher.helper'

const App = () => {
  const { userCount } = useApp()
  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)

  useEffect(() => {
    if(data) console.log(data)
  }, [data])

  return (
    <Root>
      <BodyText>User count: {userCount} and {data && data.title}</BodyText>
    </Root>
  )
}

export default App
