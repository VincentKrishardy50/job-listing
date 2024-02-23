export default function Pagination({handlePaging, getPaginationNumber}){
    return(
        <ul className="flex justify-center">
            {
              getPaginationNumber.map((page, index) => (
                  <li>
                    {(page === 1) ? 
                    <button key={index} id={index} className='mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold' onClick={handlePaging}>
                        {page}
                    </button>:
                    <button key={index} id={index} className='mx-1 px-6 py-4 rounded shadow  text-blue-500 bg-white' onClick={handlePaging}>
                      {page}
                    </button>}
                      
                  </li>
              ))
            }
            </ul>
    )
}