var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input)
{
    input.splice(1,4,'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro')
    console.log(input);

    var inputSplit = [];
    inputSplit = input[3].split('/');
    
    var bulan = inputSplit[1];
    var stringBulan = "";

    switch(Number(bulan)) 
    {
        case 1:   
            { 
                stringBulan = 'Januari';
                break; 
            }
        case 2:   
            { 
                stringBulan = 'Februari';
                break; 
            }
        case 3:   
            { 
                stringBulan = 'Maret';
                break; 
            }
        case 4:   
            { 
                stringBulan = 'April';
                break; 
            }
        case 5:   
            { 
                stringBulan = 'Mei';
                break; 
            }
        case 6:   
            { 
                stringBulan = 'Juni';
                break; 
            }
        case 7:   
            { 
                stringBulan = 'Juli';
                break; 
            }
        case 8:   
            { 
                stringBulan = 'Agustus';
                break; 
            }
        case 9:   
            { 
                stringBulan = 'September';
                break; 
            }
        case 10:   
            { 
                stringBulan = 'Oktober';
                break; 
            }
        case 11:   
            { 
                stringBulan = 'November';
                break; 
            }
        case 12:   
            { 
                stringBulan = 'Desember';
                break; 
            }
        default:  
            { 
              console.log('Salah Bulan!!');
            }
        }
        console.log(stringBulan);

        var strSort = inputSplit.sort(function(value1, value2) { return value2 - value1 });
        console.log(strSort);

        var joinStr = input[3].split('/').join('-');
        console.log(joinStr);
        var nameSlice = input[1].slice(0,15);
        console.log(nameSlice);
}

dataHandling2(input);
