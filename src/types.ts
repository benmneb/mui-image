import * as React from 'react'

export default interface ImageProps {
  alt?: string
  bgColor?: React.CSSProperties['backgroundColor']
  className?: string
  distance?: string | number
  duration?: number
  easing?: React.CSSProperties['transitionTimingFunction']
  errorIcon?: boolean | React.ReactNode
  fit?: React.CSSProperties['objectFit']
  height?: React.CSSProperties['height'] | number
  iconWrapperClassName?: string
  iconWrapperStyle?: React.CSSProperties
  onError?: () => void
  onLoad?: () => void
  position?: React.CSSProperties['position']
  shift?: 'left' | 'right' | 'top' | 'bottom' | false | null
  shiftDuration?: number
  showLoading?: boolean | React.ReactNode
  src: string
  style?: React.CSSProperties
  width?: React.CSSProperties['width'] | number
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
}
