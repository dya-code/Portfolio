import { FC, Fragment, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Title: FC<Props> = ({ children }) => {

  return (
    <Fragment>
      <div className='title text-5xl text-white h-[800px] flex justify-center items-center align-center'>{ children }</div>
    </Fragment>
  )
}