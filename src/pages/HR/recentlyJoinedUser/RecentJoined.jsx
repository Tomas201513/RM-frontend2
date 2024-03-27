import React from 'react';
import UserContext from 'src/context/UserContext';
import MyTable from './MyTable';

function RecentJoined() {

  const { userData  } = React.useContext(UserContext);

  const data= userData.slice(0, 5)


  return (
    <>
<MyTable data={data} />
    </>
  );
}
export default RecentJoined;



