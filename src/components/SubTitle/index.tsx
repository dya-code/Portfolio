import { FC, Fragment, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const SubTitle: FC<Props> = ({ children }) => {

  return (
    <Fragment>
      <div className='sub-title font-mono font-bold mb-10 text-4xl text-black flex items-center'>{ children }</div>
    </Fragment>
  )
}