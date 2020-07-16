import React, {Component} from 'react';
import {Pie,Doughnut} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chartData: {
            labels: ['Netflix','Total'],
            datasets: [{
                label: 'Profit',
                data: [45764,97697],
                //backgroundColor:'green'
                backgroundColor:["#87CEEB","#FFB6C1"],
                borderWidth: 2,
                borderColor: '#777'
                
            }]
    
          }
        }
    
      }


    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition: 'right',
        name: "Monthly"
    }

    render(){
        return (
            <div className='chart'>
            <Doughnut
                data={this.state.chartData}
                width={400}
                height={200}
                options={{
                    title: {
                        display: true,
                        text: this.props.name,
                        fontSize: 25, 
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        fullWidth: true,
                        align: 'center',
                        labels: {
                            fontColor:'black'
                        }
                    },
                    tooltips: {

                        titleAlign:'center'
                    },
                    maintainAspectRatio: false
                }}  
            />
            </div>

        )
    }
}

export default Chart;