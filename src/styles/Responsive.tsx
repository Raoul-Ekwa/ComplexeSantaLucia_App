import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export const S = (size: number) => {
    return scale(size)
}

export const VS = (size: number) => {
    return verticalScale(size)
}

export const MS = (size: number, factor?: number) => {
    return moderateScale(size, factor)
}