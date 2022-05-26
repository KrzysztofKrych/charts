import { isMobile } from 'react-device-detect'

export const GetDevice = (desktopComponent: React.ReactElement, mobileComponent: React.ReactElement) =>
  isMobile ? mobileComponent : desktopComponent
