import React from 'react'

type Props = {
  children: React.ReactNode;
  className: string;
}

const VisualBlock: React.FC<Props> = ({children, className}: Props) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default VisualBlock;