import React from  'react'
import classnames from "classnames"

/**
 * Usages: <Badge shape="square" color="grey" classNames="badge"> Badge</Badge>
 * shape : square | pill
 * color : grey | red | green | yellow | pink | blue | indigo | purple
 */

export default function Badge({children,...rest}){

    const {color,shape,classNames} = rest
    const colorClasses = color ? color : ''
    const badgeShapeClass = shape ? shape : ''
    const badgeClasses = classnames(badgeShapeClass,classNames,colorClasses)

    return(

        <div className={badgeClasses} >
            {children}
        </div>
    )
}