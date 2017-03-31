zingchart.loadModules('maps, maps-usa');

var myConfig = {
  type: null,
  title: {
    text: 'Google Auto-Complete By State',
    'color': 'black',
    'background-color': 'none',
    x: '0',
    y: '0'
  },
  subtitle : {
    text: 'Why is [state] so...',
    color: 'grey',
  },
  shapes: [
    {
      type: 'zingchart.maps',
      options: {
        id: 'map',
        name: 'usa',
        scale: true,
         style: {
          'background-color': '#ebebeb',
          label: {
            visible: true
          },
          'hover-state':{
            visible:true
          },
          tooltip: {
            'border-radius': '6'
          },
          items: {
            WA: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Washington so...<br><b>IMPORTANT</b>'
              }
            },
            CA: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is California so...<br><b>EXPENSIVE</b>'
              }
            },
            OR: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Oregon so...<br><b>WHITE</b>'
              }
            },
            ID: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Idaho so...<br><b>RACIST</b>'
              }
            },
            NV: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Nevada so...<br><b>EMPTY</b>'
              }
            },
            UT: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Utah so...<br><b>POLLUTED</b>'
              }
            },
            MT: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Montana so...<br><b>COLD</b>'
              }
            },
            WY: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Wyoming so...<br><b>WINDY</b>'
              }
            },
            AZ: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Arizona so...<br><b>HOT</b>'
              }
            },
            CO: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Colorado so...<br><b>FIT</b>'
              }
            },
            NM: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is New Mexico so...<br><b>POOR</b>'
              }
            },
            AK: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Alaska so...<br><b>SPECIAL</b>'
              }
            },
            HI: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Hawaii so...<br><b>LIBERAL</b>'
              }
            },
            ND: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is North Dakota so...<br><b>BORING</b>'
              }
            },
            SD: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is South Dakota so...<br><b>REPUBLICAN</b>'
              }
            },
            NE: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Nebraska so...<br><b>WINDY</b>'
              }
            },
            KS: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Kansas so...<br><b>FLAT</b>'
              }
            },
            OK: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Oklahoma so...<br><b>BAD</b>'
              }
            },
            TX: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Texas so...<br><b>BIG</b>'
              }
            },
            MN: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Minnesota so...<br><b>LIBERAL</b>'
              }
            },
            IA: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Iowa so...<br><b>BORING</b>'
              }
            },
            MO: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Missouri so...<br><b>REPUBLICAN</b>'
              }
            },
            AR: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Arkansas so...<br><b>POOR</b>'
              }
            },
            LA: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Louisiana so...<br><b>OBESE</b>'
              }
            },
            WI: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Wisconsin so...<br><b>DRUNK</b>'
              }
            },
            IL: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Illinois so...<br><b>BROKE</b>'
              }
            },
            KY: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Kentucky so...<br><b>POOR</b>'
              }
            },
            TN: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Tennessee so...<br><b>REPUBLICAN</b>'
              }
            },
            MS: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Mississippi so...<br><b>BACKWARDS</b>'
              }
            },
            MI: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Michigan so...<br><b>POOR</b>'
              }
            },
            IN: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Indiana so...<br><b>FLAT</b>'
              }
            },
            OH: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Ohio so...<br><b>IMPORTANT</b>'
              }
            },
            WV: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is West Virginia so...<br><b>POOR</b>'
              }
            },
            VA: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Virginia so...<br><b>EXPENSIVE</b>'
              }
            },
            NC: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is North Carolina so...<br><b>BAD</b>'
              }
            },
            SC: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is South Carolina so...<br><b>POOR</b>'
              }
            },
            GA: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Georgia so...<br><b>POOR</b>'
              }
            },
            AL: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Alabama so...<br><b>GOOD</b>'
              }
            },
            FL: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Florida so...<br><b>WEIRD</b>'
              }
            },
            LA: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Louisiana so...<br><b>OBESE</b>'
              }
            },
            PA: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Pennsylvania so...<br><b>IMPORTANT</b>'
              }
            },
            NY: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is New York so...<br><b>BIG</b>'
              }
            },
            MD: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Maryland so...<br><b>EXPENSIVE</b>'
              }
            },
            DE: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Delaware so...<br><b>SMALL</b>'
              }
            },
            NJ: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is New Jersey so...<br><b>BAD</b>'
              }
            },
            RI: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Rhode Island so...<br><b>SMALL</b>'
              }
            },
            CT: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Connecticut so...<br><b>LIBERAL</b>'
              }
            },
            MA: {
              'background-color': '#db3236',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Massachusetts so...<br><b>LIBERAL</b>'
              }
            },
            NH: {
              'background-color': '#3cba54',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is New Hampshire so...<br><b>IMPORTANT</b>'
              }
            },
            VT: {
              'background-color': '#f4c20d',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Vermont so...<br><b>WHITE</b>'
              }
            },
            ME: {
              'background-color': '#4885ed',
              'border-color': 'white',
              'tooltip': {
                text: 'Why is Maine so...<br><b>CREEPY</b>'
              }
            }
          }
        }
      }
    }
  ]
};

zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: 990,
  width: '100%'
});
