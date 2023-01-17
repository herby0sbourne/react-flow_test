import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
  console.log(data);
  // console.log(Position.Left);
  return (
    <>
      <Handle
        type="target"
        // position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className="image-cont">
        <img src={data.img} alt="" />
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        // style={{ top: 5 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        // position={Position.Right}
        id="b"
        // style={{ bottom: 5, top: 'auto' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
