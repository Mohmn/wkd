import { Box, Grid } from "@mui/material";
import JobCard from "./Components/JobCard";
import Filters from "./Components/Filter";
import useInfiniteScroll from "./Components/hooks/useInfiniteHook";
import usePagination from "./Components/hooks/usePagination";
import { FilterProvider, useFilter } from "./Components/contexts/filterContext";
import { jobFallsUnderThisFilter, userHasAppliedSomeFilter } from "./util";
import { useMemo, useRef } from "react";
import callJobsApi from "./jobs-api";


function FilteredGrid() {
  const filter = useFilter()
  const gridRef = useRef<HTMLDivElement>(null);
  const filterIsNull = useMemo(() => !userHasAppliedSomeFilter(filter), [filter])
  const { data, loading, loadMore } = usePagination(callJobsApi, 100)
  useInfiniteScroll(gridRef, loadMore, 60);

  return (
    <div ref={gridRef}
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        maxHeight: '800px',
        overflowY: 'auto'
      }}>
      <Grid container spacing={2} padding={'3rem'} key={'l'} component={'div'}>

        {
          data.map(d => {

            if (filterIsNull) {
              return <>
                <Grid item xs={12} sm={6} md={4} key={d.jdUid} >
                  <JobCard {...d} />
                </Grid>
              </>
            }

            if (!filterIsNull && jobFallsUnderThisFilter(d, filter)) {
              return <>
                <Grid item xs={12} sm={6} md={4} key={d.jdUid} >
                  <JobCard {...d} />
                </Grid>
              </>
            }


            return null

          })
        }

        {/* {
          if(loading) 
            return <p>loading...</p>
        } */}
      </Grid>
    </div>
  )

}

export default function App() {
  return (
    <>
      <Box sx={{
        backgroundColor: 'white',
        padding: '1rem',
      }}>
        <FilterProvider>
          <Filters />
          <FilteredGrid />
        </FilterProvider>
      </Box>
    </>
  );
}



