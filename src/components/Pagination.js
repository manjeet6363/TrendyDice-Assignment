import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate}) {

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
            <li key={number} className="page-item">
                <p className='page-link' onClick={()=> paginate(number)} style={{cursor: "pointer"}}>
                    {number}
                </p>
            </li>
            ))}
        </ul>
    </nav>
  )
}
