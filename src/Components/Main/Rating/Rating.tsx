import ReactStars from "react-rating-stars-component";
import {FC} from "react";
import './Rating.css'

export interface IRatingProps {
    activeColor?: string
    color?: string
    count?: number
    isEdit?: boolean
    isHalf?: boolean
    size?: number
    value: number
    classNames?: string
    name?: string
}

export const Rating: FC<IRatingProps> = ({
                                             activeColor,
                                             color,
                                             count,
                                             isEdit,
                                             isHalf,
                                             size,
                                             value,
                                             classNames
                                         }) => {
    console.log(classNames)
    return (
        <ReactStars
            activeColor="#373AF5"
            color="#EBEBEB"
            count={5}
            isHalf={true}
            size={size}
            value={value}
            isEdit={false}
            classNames="stars-style"
        />
    )
}
