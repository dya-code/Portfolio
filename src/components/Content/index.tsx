import { FC, Fragment, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {

  return (
    <Fragment>
      <div className='content font-mono text-2xl text-black flex items-center'>{ children }</div>
    </Fragment>
  )
}