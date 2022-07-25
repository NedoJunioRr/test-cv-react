import ReactStars from "react-rating-stars-component";
import {FC} from "react";
import './Rating.css'

export interface IRatingProps {
    activeColor?: string
    color?: string
    count?: number
    edit?: boolean
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
                                             edit,
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
            edit={false}
            classNames="stars-style"
        />
    )
}
