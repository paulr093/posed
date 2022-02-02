import {atom} from 'recoil'
import CubeMan from '../assets/CubeMan'

export const characterState = atom({
    key: 'characterState',
    default: <CubeMan />
})