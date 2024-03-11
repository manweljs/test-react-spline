import React, { Suspense } from 'react';
import { notification } from "antd";

const Spline = React.lazy(() => import('@splinetool/react-spline'));


function App() {

  const [api, contextHodler] = notification.useNotification();

  function onMouseDown(e: any) {
    if (e.target.name === 'house-1') {
      console.log('I have been clicked!');
      api.success({
        message: 'I have been clicked!',
        description: 'You have clicked on the house-1'
      })
    }
  }


  return (
    <div>
      {contextHodler}
      <Suspense fallback={<div>Loading...</div>}>

        <Spline
          onMouseDown={onMouseDown}
          scene="https://prod.spline.design/wbfsyoxr8iQUQu8O/scene.splinecode" />
      </Suspense>
    </div>
  );
}



export default App
