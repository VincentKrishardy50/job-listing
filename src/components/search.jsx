export default function Search({handleFilter, deleteClicked, deleteAll}){
  function setOpacity(){
    let opacity = "";  
    if(handleFilter.length == 0){
      opacity = "opacity-0"
    }
    return opacity;
  }
  

    return(
        <div className={`w-full max-w-5xl min-h-[4rem] mb-10 ${setOpacity()}`}>
          <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
              <ul className="flex flex-wrap gap-4">

                {
                  handleFilter.map((filter, index) => (
                    <li key={index} className="flex">
                      <div class="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default">{filter}</div>
                      <div>
                      <button tabIndex={index} className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark" onClick={deleteClicked}>
                        <svg tabIndex={index} xmlns="http://www.w3.org/2000/svg" onClick={deleteClicked} width="14" height="14"><path tabIndex={index} fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" onClick={deleteClicked} ></path></svg>
                      </button>            
                      </div>
                    </li>
                  ))
                }
              </ul>
              <button
                className="text-sm text-cyan-dark font-bold underline" onClick={deleteAll} 
              >
                Clear
              </button>
            </div>
          </div>
    )
}