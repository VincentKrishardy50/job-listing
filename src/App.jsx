import { useEffect, useState } from 'react';
import image1 from '../public/bg-header-desktop.svg'
import Job from './components/jobs';
import Search from './components/search';
import data from './data/data.json'
import Pagination from './components/pagination';


const App = () => {
  const [currPage, setCurrPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [dataJob, setDataJob] = useState(data)
  const itemsPerPage = 5;

  function getPagination(){
    let pages = []
    for (let i = 0; i<dataJob.length/itemsPerPage; i++){
      pages.push(i+1);
    }
    return pages;
  }

  function setDataPaging(){
    let realData = data;
    let newData = [];
    if(filters != 0){
      for (let filter of filters){
        newData = [];
        for(let job of realData){
          if(filter === job.role || filter === job.level || job.languages.includes(filter)){
            newData.push(job);
          }
        }
        realData = realData.filter(item => newData.includes(item));
      }      
    }else{
      newData = data;
    }
    return newData; 
  }

  function getDataPaging(page){
    return dataJob.slice((page-1)*itemsPerPage, (page*itemsPerPage))

  }
  


  useEffect(() => {
    let filteredData = setDataPaging();
    if(filters.length !== 0){
      setDataJob(filteredData);
    }else{
      setDataJob(data);
    }
  }, [filters]);

  const handlePaging = (e) => {
    let page = e.target.textContent;
    let prevButtonContent = document.getElementById(currPage-1);
    prevButtonContent.className = 'mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white'
    let buttonContent = document.getElementById(e.target.id);
    buttonContent.className = 'mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold'
    setCurrPage(page);
  }

  function handleAddFilter(e){
    let filter = e.target.textContent;
    let prevButtonContent = document.getElementById(currPage-1);
    prevButtonContent.className = 'mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white'
    let buttonContent = document.getElementById('0');
    buttonContent.className = 'mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold'
    setFilters(prevArrFilters => [...prevArrFilters, filter]);
    setCurrPage(1);
  }

  function handleDeleteFilter(e){
    let deleted = e.target.tabIndex;
    let prevButtonContent = document.getElementById(currPage-1);
    prevButtonContent.className = 'mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white'
    let buttonContent = document.getElementById('0');
    buttonContent.className = 'mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold'
    setCurrPage(1);
    setFilters(prevArrFilters => {
      const newArr = prevArrFilters.filter((_, index) => index !== deleted);
      return newArr;
    });
  }

  function deleteAllFilters(e){
    setFilters([]);
  }
  

  return (
    <>
      <header className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop" style={{backgroundImage: `url(${image1})`}}></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          <Search handleFilter={filters} deleteClicked={handleDeleteFilter} deleteAll={deleteAllFilters}/>
          <div>
          <Job data={getDataPaging(currPage)} filterClicked={handleAddFilter}/>
          </div>
          <nav className="mt-4">
            <Pagination handlePaging={handlePaging} getPaginationNumber={getPagination()}/>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;
