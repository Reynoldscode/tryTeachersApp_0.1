
export default function Body(){
  return(
    <>
    
     <section className ="heroimg">

      {/* search input area */}

        
        <form className="searchForm"
              action = "/search" 
              method="get">
          <p className="Slogan"> A Solid Foundation For a Brighter Future </p>
          <input type="search" name="searchSubject" placeholder="Find your course"/>
          <button className="searchBtn" type="submit"> Search</button>
        </form>
    </section>
    
    </>
  )
}