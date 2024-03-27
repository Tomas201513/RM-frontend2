import React from 'react';
import ProjectContext from '../../../context/ProjectContext';
import MyTable from './MyTable';

function RecentAdded() {

  const { projectData  } = React.useContext(ProjectContext);

  const data= projectData?.slice(0, 5)


  return (
    <>
<MyTable data={data} />
    </>
  );
}
export default RecentAdded;



