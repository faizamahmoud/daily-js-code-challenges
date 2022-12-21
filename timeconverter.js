

function timeConversion(s){

    let hour = s[0] + s[1];
    let letter = s[8] // AM/PM
      console.log(letter)
    let pmConverter = {
      '12':'12',
      '01':'13',
      '02':'14',
      '03':'15',
      '04':'16',
      '05':'17',
      '06':'18',
      '07':'19',
      '08':'20',
      '09':'21',
      '10':'22',
      '11':'23'
    }
    
      // AM
      // midnight
      if (letter === 'A'){
        if(hour === '12'){
          return '00'+s.substring(2,8)
        }else{
      // All other AM hours - drop AM and return s
        return s.substring(0,8);
        }
      }
      // PM
      // convert and return converted hour, min, sec , drop PM
      if(letter === 'P'){ return pmConverter[hour] + s.substring(2,8)}
      
    }
    
    let time = "07:05:45PM"
    let time2 = "01:05:45PM"
    let time3 = "07:45:54PM"
    console.log(timeConversion(time3))
    
    
    
    
    