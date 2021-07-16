import React from 'react'
import { useSelector } from 'react-redux'

export const SingleLiquorPage = ({match}) => {

    const liquorId = match.params.liquorId
   
    const liquor = useSelector(state => state.liquors.find(liquor => liquor.id.toString() === liquorId))
        return (
            <div className="card">
                <h1>{console.log(liquor)}</h1>
                <h2>{liquor.name}</h2>
                <h3>Brand: {liquor.brand}</h3>
                <h4>Proof: {liquor.proof}</h4>
                <h1></h1>
            </div>
        )
}