import { FC, Fragment, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const SubTitleWhite: FC<Props> = ({ children }) => {

  return (
    <Fragment>
      <div className='sub-title-white font-mono font-bold mb-10 text-4xl text-white flex items-center'>{ children }</div>
    </Fragment>
  )
}