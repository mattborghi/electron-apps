import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);

class DiffPlot extends React.Component {
  render() {
   
    // var layout = {
    //   // stackgroup:{[trace0, trace0]},
    //   title: 'My subplots',
    //   xaxis:  {domain: [0, 0.45]},
    //   xaxis2: {domain: [0.55, 1]},
    //   yaxis:  {domain: [0, .9]},
    //   yaxis2: {anchor: 'x2',domain: [0, .9]},
    //   annotations:[{
    //     text: "First subplot",
    //     font: {size: 16,color: 'green',},
    //     showarrow: false,
    //     align: 'center',
    //     x: 0,
    //     y: 1,
    //     xref: 'paper',
    //     yref: 'paper',
    //     },
    //     {
    //     text: "Second subplot",
    //     font: {size: 16,color: 'orange',},
    //     showarrow: false,
    //     align: 'center',
    //     x: 0.8,
    //     y: 1,
    //     xref: 'paper',
    //     yref: 'paper',
    //     }
    //   ]
    // };

    var trace1 = {
      x:[50, 60.52631579, 71.05263158, 81.57894737,92.10526316, 102.63157895, 113.15789474, 123.68421053, 134.21052632, 144.73684211, 155.26315789, 165.78947368, 176.31578947, 
        186.84210526, 197.36842105, 207.89473684, 218.42105263, 228.94736842, 239.47368421, 250],
      y:[0, 0.05263158, 0.10526316, 0.15789474, 1.776005695, 12.28111106, 22.89815114, 33.2895192, 43.96928672, 54.40292438, 64.68634019, 75.1714235, 85.66785105, 89.73746483, 
        95.94100874, 106.5181413, 117.4203243, 127.6628035, 138.2055067, 148.5808261, 158.8247788],
      name:'Difference'
    };

    var trace2 = {
      x:[50, 60.52631579, 71.05263158, 81.57894737,92.10526316, 102.63157895, 113.15789474, 123.68421053, 134.21052632, 144.73684211, 155.26315789, 165.78947368, 176.31578947, 
        186.84210526, 197.36842105, 207.89473684, 218.42105263, 228.94736842, 239.47368421, 250],
      y:[0.0, 0.0, 0.0, 0.0, 1.9865320151130916, 12.544268946196368, 23.213940610985176, 33.65794025070866, 44.39033935303962, 54.87660858746216, 65.2126559788968, 75.750370874, 
        86.29943, 90.7374649, 96.6778508502732, 107.30761497908583, 118.26242959591693, 128.55754031844432, 139.1528751609733, 149.5568028611334, 159.82477877254928],
      xaxis:'x',
      yaxis:'y3',
      name:'FairValue MC',
      // layout.yaxis.showcrossline:'true'
    };

    var trace3 = {
      x:[50, 60.52631579, 71.05263158, 81.57894737,92.10526316, 102.63157895, 113.15789474, 123.68421053, 134.21052632, 144.73684211, 155.26315789, 165.78947368, 176.31578947, 
        186.84210526, 197.36842105, 207.89473684, 218.42105263, 228.94736842, 239.47368421, 250],
      // y:[0, 0.5263158, 1.0526316, 1.5789474, 2.1052632, 2.6315789, 3.1578947, 3.6842105, 4.2105263, 4.7368421, 5.2631579, 5.7894737, 6.3157895, 6.8421053, 7.3684211, 
        // 7.8947368, 8.4210526, 8.9473684, 9.4736842, 9.759768, 1],
      y:[0, 0.05263158, 0.10526316,0.15789474, 0.21052632, 0.26315789, 0.31578947, 0.36842105, 0.42105263, 0.47368421, 0.52631579, 0.57894737, 0.63157895, 0.68421053, 0.73684211, 
         0.78947368, 0.84210526, 0.89473684, 0.94736842, 0.9759768, 1],
      xaxis:'x',
      yaxis:'y3',
      name:'FairValue FO'
    };

    // var trace4 = {
    //   x:[4000, 5000, 6000],
    //   y:[7000, 8000, 9000],
    //   xaxis:'x4',
    //   yaxis:'y4'
    // };

    var layout = {
      title: 'Comparison Plot', width: 800, height: 600,
      xaxis:  {domain: [0, 1], title: 'S0'},
      yaxis:  {domain: [0, 0.47], title: 'Difference'},
      // xaxis2: {domain: [0.55, 1]},
      // xaxis4: {anchor: 'y2',domain: [0.55, 1]},
      yaxis3: {domain: [0.53, 1.00], title: 'Fair Value'},
      // yaxis4: {anchor: 'x4',domain: [0.55, 1]},
      plot_bgcolor:"rgb(229,229,229)",
      paper_bgcolor:"rgb(256,256,256)"
     
      
    };

    return (   
      <div style={{paddingLeft: 50}} >      
      <Plot
        data={[trace1,trace2,trace3]}
        layout={ layout }          
      />
      </div>
    );
  }
}
export default DiffPlot;
