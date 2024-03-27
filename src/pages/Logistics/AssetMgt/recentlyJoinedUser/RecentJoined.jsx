import React from 'react';
import  AssetContext from 'src/context/AssetContext';
import MyTable from './MyTable';

function RecentJoined() {

  const { assetData  } = React.useContext(AssetContext);
  
  const data= assetData.slice(0, 5)
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzz",data)


  return (
    <>
<MyTable data={data} />
    </>
  );
}
export default RecentJoined;



